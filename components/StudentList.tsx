/*
File Name: StudentList.tsx
Author: Lexter Paule
Date: October 27, 2026

Overview: Acts as a layout container that maps and draws a collection of student cards or displays a fallback message when empty.
Receives props consisting of the filtered students array and the onRemove propagation callback then evaluates if the student array 
is empty to conditionally render a placeholder or iterates through each record to generate individual cards. Outputs a grid-based 
wrapper element containing either the rendered student cards or an empty state notification.
*/

import StudentCard from "@/components/StudentCard";
import type { Student } from "@/data/students";


interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// Empty State Check
const StudentList = ({ students, onRemove }: StudentListProps) => {
  if (students.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center">
        <p className="text-slate-500">No students to show</p>
      </div>
    );
  }

// Student Card Grid
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default StudentList;