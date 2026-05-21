import { Link } from "react-router";
import useHaptic from "../hooks/useHaptic";

export default function Footer() {
  const haptic = useHaptic();
  return (
    <footer className="bg-background  text-white mx-auto max-w-7xl flex flex-col items-center mb-28 z-50 md:mb-10  px-4 select-none ">
      <div className="pb-10 w-full flex flex-col justify-between border-dashed border-t-2 border-b-2 border-neutral-200 dark:border-neutral-800 pt-10 mb-10 items-center gap-4     ">
              <div className="text-neutral-800 dark:text-neutral-200">
                © {new Date().getFullYear()} MATE all rights reserved.
              </div>
        <div className="flex justify-between items-start ">
          <ul className="flex gap-4 flex-wrap justify-end items-center ">
            <Link
              to="/contact"
              className="bg-[oklch(.269_0_0)] text-sm font-medium px-6 py-2 rounded-full "
              onClick={() =>{

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }) 
                haptic.lightTap()
              }
            }
            >
              Contact Us
            </Link>

            <Link
              to="/about"
              className="bg-[oklch(.269_0_0)]  font-medium text-sm  px-6 py-2 rounded-full "
              onClick={() =>{
                
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
                haptic.lightTap()
              }
              }
            >
              About
            </Link>
            <Link
              to="/upload"
              className="bg-[oklch(.269_0_0)]  font-medium text-sm  px-6 py-2 rounded-full "
              onClick={() =>{
                
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
                haptic.lightTap()
              }
              }
            >
              Upload Notes
            </Link>
          </ul>
        </div>
      </div>
      <div className="px-4 md:px-0 mx-auto font-bold max-[355px]:text-[80px] text-[130px] max-[420px]:text-[100px] md:text-[200px] leading-20 text-center text-neutral-200 dark:text-neutral-700 mt-10 mb-6 md:mb-0">
        MATE
      </div>
      <div className="self-center text-neutral-600 dark:text-neutral-300  md:mt-14 z-20">
        a{" "}
        <a href="https://linktr.ee/nishant_dhanani" target="_blank" className="font-medium  cursor-pointer text-lg    font-serif text-neutral-900 dark:text-neutral-100  italic underline underline-offset-4 decoration-2 decoration-neutral-300 dark:decoration-neutral-700 "
        onClick={()=>{
          haptic.success()
        }}
        >
          {" "}
          Nishant Dhanani
        </a>{" "}
        Production
      </div>
    </footer>
  );
}
