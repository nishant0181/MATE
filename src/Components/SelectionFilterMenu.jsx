import React, {  useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { universityNames ,BranchNames } from "../lib/GeneralData";

export default function SelectionFilterMenu({ data, setFilteredData }) {
  const [university, setUniversity] = useState("GTU");
  const [degree, setDegree] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <div className="max-w-4xl md:max-w-6xl  dark:bg-[#0c0c0c] bg-white rounded-lg p-7 md:p-16   border border-neutral-300 dark:border-[#3c3c3c] flex flex-wrap  justify-center gap-4">
        <div>
          <label className="block text-sm font-medium dark:text-gray-100 text-black mb-2">
            UNIVERSITY
          </label>
          <Select
            value={university}
            onValueChange={(value) => {
              setUniversity(value);
              setFilteredData(data.filter((note) => note.university === value));
              setDegree("");
              setSemester("");
              setSubject("");
            }}
          >
            <SelectTrigger className="w-60  border-neutral-300 dark:border-[#3c3c3c]  dark:text-white text-black dark:bg-[#161616] bg-[#f5f5f5]">
              <SelectValue
                className="dark:text-white text-black"
                placeholder="Select University"
              />
            </SelectTrigger>
            <SelectContent className="dark:bg-[#161616] bg-[#f5f5f5] text-black border-[#383838]">
            {universityNames.map((university) => {
                return (
                  <SelectItem key={university} value={university}>
                    {university}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium dark:text-gray-100 text-black mb-2">
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
                  .filter(
                    (note) => note.branch === value || note.branch === "all",
                  ),
              );

              setSemester("");
              setSubject("");
            }}
          >
            <SelectTrigger className="w-48  border-neutral-300 dark:border-[#3c3c3c]  dark:text-white text-black dark:bg-[#161616] bg-[#f5f5f5]">
              <SelectValue placeholder="Select Degree" />
            </SelectTrigger>
            <SelectContent className="dark:bg-[#161616] bg-[#f5f5f5] text-black border-[#383838] ">
            {BranchNames.map(([branch, value]) => {
              
                return (
                  <SelectItem key={value} value={value}>
                    {branch} ({value})
                  </SelectItem>
                );
              })}

              {/* <SelectItem value="EE">
                Electrical Engineering
              </SelectItem>
              <SelectItem value="ME">
                Mechanical Engineering
              </SelectItem>
              <SelectItem value="Robatics&Automatics">
             Robatics&Automatics
              </SelectItem>
              <SelectItem value="AIML">
             AIML
              </SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium dark:text-gray-100 text-black mb-2">
            SEMESTER
          </label>
          <Select
            value={semester}
            disabled={!degree}
            onValueChange={(value) => {
              setSemester(value);
              setFilteredData(
                data
                  .filter((note) => note.university === university)
                  .filter(
                    (note) => note.branch === degree || note.branch === "all",
                  )
                  .filter(
                    (note) =>
                      note.semester === value || note.semester.includes(value),
                  ),
              );

              setSubject("");
            }}
          >
            <SelectTrigger className="max-[430px]:w-28 w-38  border-neutral-300 dark:border-[#3c3c3c]  dark:text-white text-black dark:bg-[#161616] bg-[#f5f5f5]">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent className="dark:bg-[#161616] bg-[#f5f5f5] text-black border-[#383838]">
              <SelectItem value="1">1st Semester</SelectItem>
              <SelectItem value="2">2nd Semester</SelectItem>
              <SelectItem value="3">3rd Semester</SelectItem>
              <SelectItem value="4">4th Semester</SelectItem>
              <SelectItem value="5">5th Semester</SelectItem>
              <SelectItem value="6">6th Semester</SelectItem>
              <SelectItem value="7">7th Semester</SelectItem>
              <SelectItem value="8">8th Semester</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium dark:text-gray-100 text-black mb-2">
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
                  .filter(
                    (note) => note.branch === degree || note.branch === "all",
                  )
                  .filter((note) => note.semester === semester || note.semester.includes(semester))
                  .filter(
                    (note) =>
                      (note.title ?? "").toLowerCase() ===
                      value.toLowerCase()                   ),
              );
            }}
          >
            <SelectTrigger className="w-38  border-neutral-300 dark:border-[#3c3c3c]  dark:text-white text-black dark:bg-[#161616] bg-[#f5f5f5]">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="dark:bg-[#161616] bg-[#f5f5f5] text-black border-[#383838] max-w-48">
              {data
                .filter((note) => note.university === university)
                .filter((note) => note.branch === degree || note.branch === "all")
                .filter((note) => note.semester === semester || note.semester.includes(semester))
                .map((note) => (
                  <SelectItem key={note.title} value={note.title}>
                    {note.title}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}
