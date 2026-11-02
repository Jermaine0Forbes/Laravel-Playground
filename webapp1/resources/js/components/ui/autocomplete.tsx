import * as React from "react"
import * as Popover from "@radix-ui/react-popover";

type AutocompleteProps = {
    /** Full list of words the field can complete to. */
    options: string[];
    /** Controlled value (optional). */
    value?: string;
    onChange?: (value: string) => void;
    /** Fires when the user picks a suggestion (click, Enter or Tab). */
    onSelect?: (value: string) => void;
    placeholder?: string;
    label?: string;
    name: string;
    maxSuggestions?: number;
};

export default function Autocomplete({
    options,
    value,
    onChange,
    onSelect,
    placeholder,
    label,
    name,
    maxSuggestions = 8,
}: AutocompleteProps) {
    const [internal, setInternal] = React.useState("");
    const text = value ?? internal;

    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState(0);

    const anchorRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const listId = React.useId();

    const setText = (next: string) => {
        if (value === undefined) setInternal(next);
        onChange?.(next);
    };

    // Words that start with what has been typed (case-insensitive).
    const matches = React.useMemo(() => {
        const query = text.trim().toLowerCase();
        if (!query) return [];
        const found = options.filter((o) => o.toLowerCase().startsWith(query));
        // Nothing left to suggest if the only matches are exactly what was typed.
        if (found.every((o) => o.toLowerCase() === query)) return [];
        return found.slice(0, maxSuggestions);
    }, [text, options, maxSuggestions]);

    const isOpen = open && matches.length > 0;
    const highlighted = isOpen ? matches[active] : undefined;

    // Inline "ghost" completion: keep what the user typed, show the rest dimmed.
    const ghostRest =
        highlighted && highlighted.length > text.length
            ? highlighted.slice(text.length)
            : "";

    const choose = (word: string) => {
        setText(word);
        onSelect?.(word);
        setOpen(false);
        inputRef.current?.focus();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        setActive(0);
        setOpen(true);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case "ArrowDown":
                if (matches.length) {
                    e.preventDefault();
                    setOpen(true);
                    setActive((i: number) => (i + 1) % matches.length);
                }
                break;
            case "ArrowUp":
                if (matches.length) {
                    e.preventDefault();
                    setOpen(true);
                    setActive((i: number) => (i - 1 + matches.length) % matches.length);
                }
                break;
            case "Enter":
                if (highlighted) {
                    e.preventDefault();
                    choose(highlighted);
                }
                break;
            case "Tab":
                if (highlighted) {
                    e.preventDefault();
                    choose(highlighted);
                }
                break;
            case "ArrowRight": {
                const atEnd = e.currentTarget.selectionStart === text.length;
                if (highlighted && atEnd) {
                    e.preventDefault();
                    choose(highlighted);
                }
                break;
            }
            case "Escape":
                if (isOpen) {
                    e.preventDefault();
                    setOpen(false);
                }
                break;
        }
    };

    return (
        <div className="ac-field">
            {label && (
                <label className="ac-label" htmlFor={`${listId}-input`}>
                    {label}
                </label>
            )}

            <Popover.Root open={isOpen} onOpenChange={setOpen}>
                {/* Anchor (not Trigger): the input positions the popover but doesn't toggle it. */}
                <Popover.Anchor asChild>
                    <div className="ac-input-wrap relative bg-white border border-gray-300 rounded-md" ref={anchorRef}>
                        <div className="ac-ghost overflow-hidden absolute inset-0 pointer-events-none" aria-hidden="true">
                            <span className="ac-ghost-typed hidden">{text}</span>
                            <span className="ac-ghost-rest text-gray-400">{ghostRest}</span>
                        </div>
                        <input
                            id={`${listId}-input`}
                            ref={inputRef}
                            className="ac-input px-2 border border-color-black block rounded py-2 w-1/2"
                            value={text}
                            placeholder={placeholder}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            onFocus={() => setOpen(true)}
                            name={name}
                            autoComplete="off"
                            spellCheck={false}
                            role="combobox"
                            aria-expanded={isOpen}
                            aria-controls={listId}
                            aria-autocomplete="both"
                            aria-activedescendant={
                                isOpen ? `${listId}-opt-${active}` : undefined
                            }
                        />
                    </div>
                </Popover.Anchor>

                <Popover.Portal>
                    <Popover.Content
                        className="ac-popover max-w-[260px] overflow-y-auto border border-gray-300 rounded-md p1 z-[50px] w-full "
                        align="start"
                        sideOffset={6}
                        // Keep keyboard focus in the input when the popover opens.
                        onOpenAutoFocus={(e) => e.preventDefault()}
                        onCloseAutoFocus={(e) => e.preventDefault()}
                        // Clicking/typing in the input must not count as "outside".
                        onInteractOutside={(e) => {
                            if (anchorRef.current?.contains(e.target as Node)) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <ul className="ac-list m-0 p-0 list-none w-full" id={listId} role="listbox">
                            {matches.map((word, i) => (
                                <li
                                    key={word}
                                    id={`${listId}-opt-${i}`}
                                    role="option"
                                    aria-selected={i === active}
                                    data-active={i === active || undefined}
                                    className="ac-option bg-white px-3 py-1"
                                    // Prevent the input from losing focus before click fires.
                                    onMouseDown={(e) => e.preventDefault()}
                                    onMouseEnter={() => setActive(i)}
                                    onClick={() => choose(word)}
                                >
                                    <span className="ac-match font-bold">{word.slice(0, text.trim().length)}</span>
                                    {word.slice(text.trim().length)}
                                </li>
                            ))}
                        </ul>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}