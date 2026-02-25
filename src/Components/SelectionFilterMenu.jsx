import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";


export default function SelectionFilterMenu() {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <div className="max-w-4xl md:max-w-5xl  bg-[#0c0c0c] rounded-lg p-7 md:p-12  border border-[#222323] flex flex-wrap justify-center gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-100 mb-2">
            UNIVERSITY
          </label>
          <Select value={university} onValueChange={setUniversity}>
            <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
              <SelectValue className="text-white" placeholder="Select University" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838]">
              <SelectItem value="university-a">University A</SelectItem>
              <SelectItem value="university-b">University B</SelectItem>
              <SelectItem value="university-c">University C</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100  mb-2">
            DEGREE
          </label>
          <Select value={degree} onValueChange={setDegree}>
            <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
              <SelectValue placeholder="Select Degree" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838]">
              <SelectItem value="computer-science">Computer Science</SelectItem>
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
          <label className="block text-sm font-medium text-gray-100 mb-2">
            YEAR
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
          <label className="block text-sm font-medium text-gray-100 mb-2">
            SEMESTER
          </label>
          <Select value={semester} onValueChange={setSemester}>
            <SelectTrigger className="max-w-48 bg-[#161616] border-[#383838] text-white">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838]">
              <SelectItem value="first-semester">First Semester</SelectItem>
              <SelectItem value="second-semester">Second Semester</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-100  mb-2">
            SUBJECT
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
    </>
  );
}
