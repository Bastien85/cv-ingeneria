import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';

import SidebarItem from './components/Sidebar/SidebarItem';
import Sidebar from './components/Sidebar/Sidebar';
import { sidebarStructure } from './constants/SidebarStructure';
import Resume from './components/Resume/Resume';
import { ItemType } from './types/ItemType';

function App() {
  const [expanded, setExpanded] = useState(true);
  const [resumeItems, setResumeItems] = useState<ItemType[]>([])
  const [sidebarItems, setSidebarItems] = useState<ItemType[]>(sidebarStructure)

  const moveSidebarItem = (dragIndex: number) => {
    const draggedItem = sidebarItems[dragIndex];
    const newSidebarItems = [...sidebarItems];
    const newResumeItems = [...resumeItems];
    newSidebarItems.splice(dragIndex, 1);
    newResumeItems.push(draggedItem);
    setSidebarItems(newSidebarItems);
    setResumeItems(newResumeItems);
  };

  const moveResumeItem = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = resumeItems[dragIndex];
    const newSortedItems = [...resumeItems];
    newSortedItems.splice(dragIndex, 1);
    newSortedItems.splice(hoverIndex, 0, draggedItem);
    setResumeItems(newSortedItems);
  };

  const saveItemContent = (index: number, item: ItemType) => {
    const newResumeItems = [...resumeItems];
    newResumeItems.splice(index, 1, item)
    setResumeItems(newResumeItems);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App bg-slate-300 flex">
        <Sidebar expanded={expanded} setExpanded={setExpanded}>
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} expanded={expanded} item={item} index={index} />
          ))}
        </Sidebar>
        <Resume 
          items={resumeItems}
          moveSidebarItem={moveSidebarItem}
          moveResumeItem={moveResumeItem}
          saveItemContent={saveItemContent}
        />
      </div>
    </DndProvider>
  );
}

export default App;
