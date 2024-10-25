import { Sidebar } from "../Sidebar";

export function Header() {
  return (
    <div className="h-16 flex justify-between w-full bg-stone-700 p-5 text-white text-xl font-semibold">
      Front end Reactjs
      <Sidebar className="lg:hidden" />
    </div>
  );
}
