import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        className="h-10 w-10 rounded-full"
        src="https://avatars.githubusercontent.com/u/40730261?v=4"
      />

      <div className="flex flex-col truncate">
        <p className="text-sm/5 font-semibold text-zinc-700">Pedro Afonso</p>
        <span className="truncate text-sm/5 text-zinc-500">
          pedro@untitleduipedro@untitleduipedro@untitledui.com
        </span>
      </div>

      <button type="button" className="ml-auto p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 rounded-md text-zinc-500" />
      </button>
    </div>
  );
}