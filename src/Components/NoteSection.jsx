import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function NoteSection() {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <section
      id="noteSection"
      className="md:max-w-350  font-Inter mx-auto text-white select-none "
    >
      <div className="relative bg-black w-full  flex flex-col items-center   bg-[url('/Images/Hero.svg')]  bg-cover bg-center bg-no-repeat">
                <div className=" bg-[linear-gradient(0deg,transparent_0%,#000000_97%)]  w-full absolute top-0  z-20 h-16  md:h-28 "></div>
        <div className=" mx-auto  mt-18 flex flex-col items-center gap-15 bg-black/50 p-6 rounded-lg z-30">
          <div className="mt-4">
            <h1 className="text-5xl font-bold  text-center tracking-wider text-amber-200">
              Welcome to Mate Notes!
            </h1>
            <p className="text-lg text-center text-gray-300">
              Find your notes by filtering or searching.{" "}
            </p>
          </div>

          <input
          name="InputSearch"
            type="text"
            className="w-full text-sm  p-2 rounded-lg bg-[#161616] text-white border border-[#222323] focus:outline-none focus:ring-1 focus:ring-[#ffff]"
            placeholder="Search notes By title or Subject..."
          />

          <div className="max-w-4xl md:max-w-5xl  bg-[#0c0c0c] rounded-lg p-7 md:p-12  border border-[#222323] flex flex-wrap justify-center gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                University
              </label>
              <Select value={university} onValueChange={setUniversity}>
                <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
                  <SelectValue placeholder="Select University" />
                </SelectTrigger>
                <SelectContent className="bg-[#161616] border-[#383838]">
                  <SelectItem value="university-a">University A</SelectItem>
                  <SelectItem value="university-b">University B</SelectItem>
                  <SelectItem value="university-c">University C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Degree
              </label>
              <Select value={degree} onValueChange={setDegree}>
                <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
                  <SelectValue placeholder="Select Degree" />
                </SelectTrigger>
                <SelectContent className="bg-[#161616] border-[#383838]">
                  <SelectItem value="computer-science">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="electrical-engineering">
                    Electrical Engineering
                  </SelectItem>
                  <SelectItem value="mechanical-engineering">
                    Mechanical Engineering
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Year
              </label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="bg-[#161616] border-[#383838]">
                  <SelectItem value="first-year">First Year</SelectItem>
                  <SelectItem value="second-year">Second Year</SelectItem>
                  <SelectItem value="third-year">Third Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Semester
              </label>
              <Select value={semester} onValueChange={setSemester}>
                <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
                  <SelectValue placeholder="Select Semester" />
                </SelectTrigger>
                <SelectContent className="bg-[#161616] border-[#383838]">
                  <SelectItem value="first-semester">First Semester</SelectItem>
                  <SelectItem value="second-semester">
                    Second Semester
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent className="bg-[#161616] border-[#383838]">
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl  font-bold  mb-2 text-green-100">Available Notes</h2>
          <p className="text-gray-400">Browse through our collection of study materials</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Introduction to Programming</h3>
                <p className="text-sm text-gray-400 mb-3">Learn the basics of programming with Python</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Computer Science</span>
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Year 1</span>
            </div>
            <div className="text-sm text-gray-500">University A • 12 pages</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Calculus I: Derivatives</h3>
                <p className="text-sm text-gray-400 mb-3">Complete guide to understanding derivatives</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Mathematics</span>
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Year 1</span>
            </div>
            <div className="text-sm text-gray-500">University B • 18 pages</div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Physics: Mechanics</h3>
                <p className="text-sm text-gray-400 mb-3">Newton&apos;s laws and motion fundamentals</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Physics</span>
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Year 1</span>
            </div>
            <div className="text-sm text-gray-500">University C • 15 pages</div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Data Structures</h3>
                <p className="text-sm text-gray-400 mb-3">Arrays, linked lists, trees and graphs</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Computer Science</span>
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Year 2</span>
            </div>
            <div className="text-sm text-gray-500">University A • 20 pages</div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Organic Chemistry</h3>
                <p className="text-sm text-gray-400 mb-3">Bonding, reactions, and mechanisms</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Chemistry</span>
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Year 2</span>
            </div>
            <div className="text-sm text-gray-500">University B • 22 pages</div>
          </div>

          {/* Card 6 */}
          <div className="bg-[#0c0c0c] border border-[#222323] rounded-lg p-6 hover:border-[#ffff] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Electrical Engineering Basics</h3>
                <p className="text-sm text-gray-400 mb-3">Circuits, voltage, current concepts</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Electrical Engineering</span>
              <span className="text-xs bg-[#1F1F23] text-amber-400 px-3 py-1 rounded-full">Year 1</span>
            </div>
            <div className="text-sm text-gray-500">University C • 16 pages</div>
          </div>
        </div>
      </div>
    </section>
  );
}
