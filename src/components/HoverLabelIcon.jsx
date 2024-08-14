import { useState } from 'react';

export default function HoverLabelIcon({ href, Icon, label, onSideNavClick }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className='flex gap-2 items-center justify-start'>
            <a
                href={href}
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onSideNavClick}>
                <Icon size={20} />
            </a>
            {isHovered && (
                <div className='px-2 py-1 text-sm bg-gray-200 text-gray-800 rounded transition-opacity transition-transform duration-300 ease-in-out translate-y-0'>
                    {label}
                </div>
            )}
        </div>
    );
}
