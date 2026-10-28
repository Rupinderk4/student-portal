/*
File name: AddStudent.tsx
Author: Eunice Mendez
Date: October 27, 2026

Overview: This file shows four inputs and an Add Student button. It gets one prop, onAdd from StudentPortal. When the button is clicked,
it checks that both names are filled in and the grade is 9-12. 
*/

"use client";

import {useState} from "react";

//the props gets from StudentPortal
interface AddStudentProps{
    onAdd:(firstName: string, lastname: string, grade: number, average: number) => void;
}

const AddStudent = ({onAdd}: AddStudentProps) =>{
    //state for erach input, grade and average are strings because inputs always give back a string
    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[grade, setGrade] = useState("9");
    const [average, setAverage] = useState("70");

    //this update the state everytime the user types in the box
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setFirstName(event.target.value);
    };

    const handleLastNameChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLastName(event.target.value);
    }

    const handleGradeChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setGrade(event.target.value);
    };

    const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setAverage(event.target.value);
    };

    //runs when the Add student button is clicked
    const handleClick=()=>{
        //if either the firstName is empty or the lastName, doesnt add anything
        if(firstName==="" || lastName ===""){
            return;
        } 
        //only allows grade 9-12
        if (Number(grade) < 9 || Number(grade)>12){
            return;
        }

        //sen the new student to StudentPortal. Number() turns text into number
        onAdd(firstName, lastName, Number(grade), Number(average));
        //resets the boxes to starting value
        setFirstName("");
        setLastName("");
        setGrade("9");
        setAverage("70");
    }

     return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* First name */}
        <div>
          <label htmlFor="first-name" className="mb-2 block text-sm font-medium">
            First name
          </label>
          <input
            id="first-name"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="last-name" className="mb-2 block text-sm font-medium">Last name</label>
          <input
            id="last-name"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          />
        </div>

   
        <div>
          <label htmlFor="grade" className="mb-2 block text-sm font-medium">
            Grade
          </label>
          <input
            id="grade"
            type="number"
            min={9}
            max={12}
            value={grade}
            onChange={handleGradeChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          />
        </div>


        <div>
          <label htmlFor="average" className="mb-2 block text-sm font-medium">
            Average
          </label>
          <input
            id="average"
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={handleAverageChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

   {/* add student button */}
      <button
        onClick={handleClick}
        className="mt-6 cursor-pointer rounded-lg bg-blue-950 px-5 py-2 font-semibold text-white transition hover:bg-blue-900">Add student</button>
    </div>
  );
};

export default AddStudent;