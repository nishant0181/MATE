import { Heart, Home, LayoutDashboard, Notebook, User } from "lucide-react";
import { NavLink } from "react-router";
import useHaptic from '../hooks/useHaptic';


export default function GlassDock() {
    const haptic = useHaptic();
  return (
    <>
      <div className="fixed bottom-0  left-1/2 -translate-x-1/2 z-50 md:bottom-2 md:hidden dark:bg-background bg-white w-full  ">
   

        <div className="flex items-center justify-between px-8 py-4">
          <NavLink to="/" 
          style={({ isActive }) => ({ color: isActive ? '#8a8a8a' : '' } )}
           onClick={() =>{
             haptic.mediumTap();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
          >
            <Home size={28} />
          </NavLink>

          <NavLink to="/notes" className=""
          style={({ isActive }) => ({ color: isActive ? '#8a8a8a' : '' })}
          onClick={() =>{
             haptic.mediumTap();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }}
          >
            <Notebook size={28} />
          </NavLink>

          <NavLink to="/dashboard" className=""
          style={({ isActive }) => ({ color: isActive ? '#8a8a8a' : '' })}
          onClick={() =>{
             haptic.mediumTap();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            }
          )
          }
        }
          >
            <LayoutDashboard size={28} />
          </NavLink>

          <NavLink to="/favorites" className=""
          style={({ isActive }) => ({ color: isActive ? '#8a8a8a' : '' })}
          
            onClick={() =>{
             haptic.mediumTap();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            }
          )
          }
        }
          >
            <Heart size={28} />
          </NavLink>

          <NavLink to="/about"
          style={({ isActive }) => ({ color: isActive ? '#8a8a8a' : '' })}
          
               onClick={() =>{
             haptic.mediumTap();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            }
          )
          }
        }
          >
            <User size={28} />
          </NavLink>
        </div>
      </div>
    </>
  );
}
