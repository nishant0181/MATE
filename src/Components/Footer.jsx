import { Link } from "react-router";

 

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-white mx-auto max-w-7xl flex flex-col items-center mb-20  ">
<div className="text-neutral-600 dark:text-neutral-300 text-center">
    Ready to make better decisions with your data?
</div>
        <div className="pb-10 w-full flex flex-col justify-between border-dashed border-t-2 border-b-2 border-neutral-200 dark:border-neutral-800 pt-10 mb-10     ">
        <div className="flex justify-between items-start">
            <div className="text-neutral-600 dark:text-neutral-300">© MATE </div>
            <ul className="flex justify-end flex-wrap w-1/2 items-center gap-4 text-neutral-600 dark:text-neutral-300">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
            <div className="self-center pt-10">A &nbsp;
                <span className="font-medium blur-[5px]">Coming soon</span>&nbsp; Production</div>
        </div>
      <div className="font-bold text-[150px] max-[420px]:text-[100px] md:text-[200px] leading-20 text-center selection:bg-neutral-300 dark:selection:bg-neutral-900  text-neutral-200 dark:text-neutral-800 mt-10 mb-6 md:mb-0">
        MATE
      </div>
    </footer>
  );
}
