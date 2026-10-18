import { Text, Link as LinkUI } from '@radix-ui/themes';

export default function SideContainerBlock() {
    return (
        <div className="side-container-block">
            <div className="side-header-container">
                <Text size="4" className="side-header-title">Popular topics</Text>
            </div>

            <ul className="capitalize max-w-53.75">
                <li className="truncate capitalize">
                    <LinkUI href="#" size="2">
                        Photography Tips
                    </LinkUI>
                </li>

                <li className="truncate capitalize">
                    <LinkUI href="#" size="2">
                        pc build advice Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </LinkUI>
                </li>

                <li className="truncate capitalize">
                    <LinkUI href="#" size="2">
                        best tv shows
                    </LinkUI>
                </li>

                <li className="truncate capitalize">
                    <LinkUI href="#" size="2">
                        camping gear recommendations
                    </LinkUI>
                </li>

            </ul>
        </div>
    )
}