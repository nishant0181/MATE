import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SelectionFilterMenu({
  data,
  setFilteredData,
}) {
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  // console.log(filteredData);

  return (
    <>
      <div className="max-w-4xl md:max-w-6xl  bg-[#0c0c0c] rounded-lg p-7 md:p-16   border border-[#222323] flex flex-wrap  justify-center gap-4">
          
        <div  >
          <label className="block text-sm font-medium text-gray-100 mb-2">
            UNIVERSITY
          </label>
          <Select
            value={university}
            onValueChange={(value) => {
              setUniversity(value);
              setFilteredData(data.filter((note) => note.university === value));
              setDegree("");
              setYear("");
              setSemester("");
              setSubject("");
            }}
          >
            <SelectTrigger className="w-60 bg-[#161616] border-[#383838] text-white">
              <SelectValue
                className="text-white"
                placeholder="Select University"
              />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838]">
              {Array.from(new Set(data.map((note) => note.university))).map(
                (university) => (
                  <SelectItem key={university} value={university}>
                    {university}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-100  mb-2">
            DEGREE
          </label>
          <Select
            value={degree}
            disabled={!university}
            onValueChange={(value) => {
              setDegree(value);

              setFilteredData(
                data
                  .filter((note) => note.university === university)
                  .filter((note) => note.branch === value),
              );
              setYear("");
              setSemester("");
              setSubject("");
            }}
          >
            <SelectTrigger className="w-48 bg-[#161616] border-[#383838] text-white">
              <SelectValue placeholder="Select Degree" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838] ">
              <SelectItem  value="Computer Engineering">
                Computer Science
              </SelectItem>
              <SelectItem value="Electrical Engineering">
                Electrical Engineering
              </SelectItem>
              <SelectItem value="Mechanical Engineering">
                Mechanical Engineering
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

<div className="flex flex-wrap justify-center gap-2 ">
 
        <div>
          <label className="block text-sm font-medium text-gray-100 mb-2">
            YEAR
          </label>
          <Select
            value={year}
            disabled={!degree}
            onValueChange={(value) => {
              setYear(value);

              setFilteredData(
                data
                  .filter((note) => note.university === university)
                  .filter((note) => note.branch === degree)
                  .filter((note) => note.year === value),
              );
              setSemester("");
              setSubject("");
            }}
          >
            <SelectTrigger className="max-[430px]:w-28 w-38 bg-[#161616] border-[#383838] text-white">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838]">
              <SelectItem value="1st Year">First Year</SelectItem>
              <SelectItem value="2nd Year">Second Year</SelectItem>
              <SelectItem value="3rd Year">Third Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-100 mb-2">
            SEMESTER
          </label>
          <Select
            value={semester}
            disabled={!year}
            onValueChange={(value) => {
              setSemester(value);
              setFilteredData(
                data
                  .filter((note) => note.university === university)
                  .filter((note) => note.branch === degree)
                  .filter((note) => note.year === year)
                  .filter((note) => note.semester === value),
              );

              setSubject("");
            }}
          >
            <SelectTrigger className="max-[430px]:w-28 w-38 bg-[#161616] border-[#383838] text-white">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838]">
              <SelectItem value="1st Semester">1st Semester</SelectItem>
              <SelectItem value="2nd Semester">2nd Semester</SelectItem>
              <SelectItem value="3rd Semester">3rd Semester</SelectItem>
              <SelectItem value="4th Semester">4th Semester</SelectItem>
              <SelectItem value="5th Semester">5th Semester</SelectItem>
              <SelectItem value="6th Semester">6th Semester</SelectItem>
              <SelectItem value="7th Semester">7th Semester</SelectItem>
              <SelectItem value="8th Semester">8th Semester</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
</div>       

        <div>
          <label className="block text-sm font-medium text-gray-100  mb-2">
            SUBJECT
          </label>
          <Select
            value={subject}
            disabled={!semester}
            onValueChange={(value) => {
              setSubject(value);
              setFilteredData(
                data
                  .filter((note) => note.university === university)
                  .filter((note) => note.branch === degree)
                  .filter((note) => note.year === year)
                  .filter((note) => note.semester === semester)
                  .filter(
                    (note) =>
                      (note.subject ?? "").toLowerCase() === value.toLowerCase(),
                  ),
              );
            }}
          >
            <SelectTrigger className="w-38 bg-[#161616] border-[#383838] text-white">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="bg-[#161616] border-[#383838] max-w-48">
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
