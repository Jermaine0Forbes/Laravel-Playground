import React from 'react';
import { Text} from '@radix-ui/themes';
import { SideBlockProps } from '@/types/global';

export default function SideContainerBlock({title, children}: SideBlockProps) {
    return (
        <div className="side-container-block">
            <div className="side-header-container">
                <Text size="4" className="side-header-title">{title}</Text>
            </div>
                {children}
        </div>
    )
}