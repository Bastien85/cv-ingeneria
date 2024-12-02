import { useState } from "react";
import { useDrop } from 'react-dnd';

import { ItemType } from "../../types/ItemType";
import ResumeItem from "./ResumeItem";

type ResumeProps = {
    items: ItemType[];
    moveResumeItem: (dragIndex: number, hoverIndex: number) => void;
    moveSidebarItem: (dragIndex: number) => void;
    saveItemContent: (index: number, item: ItemType) => void;
}

export default function Resume(props: ResumeProps) {
    const { items, moveResumeItem, moveSidebarItem, saveItemContent} = props;

    const [, drop] = useDrop({
        accept: 'sidebar',
        drop: (item: any) => {
            const dragIndex = item.index;
            moveSidebarItem(dragIndex);
        }
    });

    return (
        <div className="flex-auto">
        <div className="h-a4 w-a4 direction- mt-20 bg-slate-100" ref={(node) => drop(node)} >
            <ul className="flex flex-col">
                {items && items.map((item, index) => (
                    item && <ResumeItem key={index} item={item} index={index} moveItem={moveResumeItem} saveItemContent={saveItemContent} />
                ))}
            </ul>
        </div>
        </div>
    );
}