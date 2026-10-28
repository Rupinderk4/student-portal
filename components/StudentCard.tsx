/*
File Name: StudentCard.tsx
Author: Lexter Paule
Date: October 27, 2026

Overview: Renders an individual student's comprehensive profile card featuring toggleable academic details and removal actions,
receives inputs through props including the individual student object and the onRemove callback function, manages internal expansion 
state using a hook and conditionally evaluates whether to display honour roll badges and average marks then it outputs a styled 
container component containing the student's name, grade, conditional details, and interactive buttons.
*/

"use client";

import { useState } from "react";
import { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// Component State and Logic
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const isHonorRoll = student.average >= 80;

// Rendering Component
  return (
    <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {student.firstName} {student.lastName}
            </h3>
            <p className="text-sm text-slate-600">Grade {student.grade}</p>
          </div>

          {showDetails && isHonorRoll && (
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Honor roll
            </span>
          )}
        </div>

          {showDetails && (
          <div className="mt-4 rounded-md bg-slate-50 p-3 text-sm text-slate-700">
            <p>
              <span className="font-medium">Average: </span> {student.average}%
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowDetails(!showDetails)}
          className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          onClick={() => onRemove(student.id)}
          className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default StudentCard;