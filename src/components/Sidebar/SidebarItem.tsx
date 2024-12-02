import { ItemType } from "../../types/ItemType";
import { useDrag, useDrop } from 'react-dnd';

type SidebarItemProps = {
    index: number;
    active?: boolean;
    expanded: boolean;
    item: ItemType;
}

export default function SidebarItem(props: SidebarItemProps) {
    const { index, active = false, expanded, item: { icon, title, content } } = props;

    const [{ isDragging }, drag] = useDrag({
        type: 'sidebar',
        item: { type: 'sidebar', index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const buttonClassName = `group relative my-1 flex w-full cursor-pointer
        items-center rounded-md px-3 py-2 font-medium transition-colors
        ${!expanded && 'hidden sm:flex'}
        ${active
            ? 'text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100'
            : 'text-gray-600 hover:bg-indigo-50'
        }
    `
    const spanClassName =  `overflow-hidden text-start transition-all 
    ${expanded ? 'ml-3 w-44' : 'w-0'}
    `

    return (
        <>
            <li 
                ref={(node) => drag(node)} 
                className={`bg-gray-100 my-2 rounded-md shadow-md ${isDragging ? 'opacity-50' : ''}`}
                style={{ cursor: 'move' }}
            >
                <button className={buttonClassName}>
                    <span className="flex h-6 w-6">{icon}</span>

                    <span className={spanClassName}>
                        {title}
                    </span>
                </button>
            </li>
        </>
    );
}