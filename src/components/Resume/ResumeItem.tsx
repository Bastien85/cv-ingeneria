import { ItemType } from "../../types/ItemType";
import { useDrag, useDrop } from 'react-dnd';

import EditableText from "../EditableText";


type ResumeItemProps = {
    index: number;
    item: ItemType;
    moveItem: (dragIndex: number, hoverIndex: number) => void;
    saveItemContent: (index: number, item: ItemType) => void;
}

export default function ResumeItem(props: ResumeItemProps) {
    const { index, item, moveItem, saveItemContent } = props;
    const { icon, title, content } = item;


    const [{ isDragging }, drag] = useDrag({
        type: 'resume',
        item: { type: 'resume', index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'resume',
        hover: (item: any) => {
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    return (
        <>
            <li 
                ref={(node) => drag(drop(node))} 
                className={`bg-gray-100 w-full items-start flex-col p-4 my-2 rounded-md shadow-md ${isDragging ? 'opacity-50' : ''}`}
                style={{ cursor: 'move' }}
            >
                <div className="w-full items-center inline-flex">
                    <span className="flex p-2">{icon}</span>
                    <span className="overflow-hidden text-start transition-all">
                        {title}
                    </span>
                </div>
                <span>
                    <EditableText initialHtml={content} onContentChange={(content) => saveItemContent(index, {...item, content })} />
                </span>
            </li>
        </>
    );
}