/*
File name: StudentPortal.tsx
Author: Eunice Mendez
Date: Oct 27, 2026


Overview: This file is the main part of the portal and holds the list of students and the search text in state. It doesn't take any props
and starts with the students from data/students.ts. It works out the three numbers and the search results from the list, handles add, remove
and clear all with a new array each time.
*/

"use client";
import { useState } from "react";
import {students as startingStudents, Student } from "@/data/students";
import StatsPanel from "./StatsPanel";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";
import AddStudent from "@/components/AddStudent"


const StudentPortal =() => {
    //this is the state of list of students and the search text
    const [students, setStudents] = useState<Student[]>(startingStudents);
    const [searchText, setSearchText] = useState<string>("");

    //the three numbers for stats panel. Its not saved in state 
    const totalStudents = students.length;
    const honourRollCount= students.filter((student) => student.average >=80).length;
    const grade12Count = students.filter((student) => student.grade === 12).length;

    //the students that match the search, set toLowerCase to its not case sensitive
    const matching = students.filter((student) =>
    (student.firstName + " " + student.lastName).toLowerCase().includes(searchText.toLowerCase()));

    //updates the search text when the user types in the search box
    const handleSearchChange = (text: string) =>{
        setSearchText(text);
    };

    //adds a new student by making a new array
    const handleAdd=(firstName: string, lastName: string, grade: number, average: number) =>{
        const newStudent ={
            id: Date.now(),
            firstName: firstName,
            lastName: lastName, 
            grade: grade,
            average: average,

        };
        setStudents([...students, newStudent]);
    };

    //removes student by keeping every student except the one with that id
    const handleRemove = (id: number) =>{
        setStudents(students.filter((student) => student.id!==id));
    }

    //clears the whole list by setting it into an empty array
    const handleClear = () => {
        setStudents([]);
    };

    return (
        <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
            <section id ="overview">
                <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                <StatsPanel totalStudents={totalStudents} honourRollCount={honourRollCount} grade12Count={grade12Count}/>
            </section>

            <section id="students">
                <h2 className="mb-4 text-2xl font-bold">Students</h2>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end">
                    <SearchBox searchText={searchText} onSearchChange={handleSearchChange}/>
                    <button onClick={handleClear} className="shrink-0 cursor-pointer rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700">Clear All</button>
                </div>

                <StudentList students={matching} onRemove={handleRemove}/>
            </section>

            <section id="add-student">
                <h2 className="mb-4 text-2xl font-bold">Add a student</h2>
                <AddStudent onAdd={handleAdd}/>
            </section>
        </div>
    );
};

export default StudentPortal