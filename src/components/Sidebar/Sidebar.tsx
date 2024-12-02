import {
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
} from 'react-icons/hi';

export default function Sidebar({ children, expanded, setExpanded }: any) {
  return (
    <div className="relative flex-1">
      <div
        className={`fixed inset-0 -z-10 block bg-gray-400  ${expanded ? 'block sm:hidden' : 'hidden'}`}
      />
      <aside
        className={`box-border h-screen transition-all ${expanded ? 'w-5/6 sm:w-64' : 'w-0 sm:w-20'}`}
      >
        <nav className="flex h-full flex-col border-r bg-white shadow-sm">
          <div className="flex justify-end p-4 pb-2">
            <div className={`${expanded ? '' : 'hidden sm:block'}`}>
              <button
                onClick={() => setExpanded((curr: boolean) => !curr)}
                className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
              >
                {expanded ? (
                  <HiOutlineChevronLeft className="h-6 w-6" />
                  ) : (
                  <HiOutlineChevronRight className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
        </nav>
      </aside>
    </div>
  );
}