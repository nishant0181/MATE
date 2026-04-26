import { Heart, Home, LayoutDashboard, Notebook, User } from "lucide-react";
import { Link } from "react-router";

export default function GlassDock() {
  return (
    <>
      <div className="fixed bottom-0  left-1/2 -translate-x-1/2 z-50 md:bottom-2 md:hidden dark:bg-background bg-white w-full  ">
        <div
          className="
             bg-[linear-gradient(180deg,transparent_0%,#ffffff_50%)]
       dark:bg-[linear-gradient(180deg,transparent_0%,oklch(0.227_0_281.65)_97%)]
        w-full absolute bottom-16 z-20 h-16 md:h-28 pointer-events-none  "
        ></div>

        <div className="flex items-center justify-between px-8 py-8">
          <Link to="/">
            <Home size={28} />
          </Link>

          <Link to="/notes">
            <Notebook size={28} />
          </Link>

          <Link to="/dashboard">
            <LayoutDashboard size={28} />
          </Link>

          <Link to="/favorites">
            <Heart size={28} />
          </Link>

          <Link to="/profile">
            <User size={28} />
          </Link>
        </div>
      </div>
    </>
  );
}
