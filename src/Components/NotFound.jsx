import { Link } from "react-router";
import { Button } from "@/Components/ui/button";
import { MoveRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center select-none font-Figtree">
      <div className="text-[120px] md:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-300 to-neutral-700 dark:from-neutral-700 dark:to-neutral-900 leading-none tracking-tighter">
        404
      </div>
      <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        Lost in the Syllabus?
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md mx-auto text-base md:text-lg">
        The page you are looking for doesn't exist, has been moved, or maybe it's just out of syllabus.
      </p>
      <div className="mt-10 flex items-center justify-center gap-4">
        <Link to="/">
          <Button size="lg" className="rounded-full px-8 font-semibold flex items-center gap-2 cursor-pointer">
            Return to Sweet Home <MoveRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
