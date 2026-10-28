/*
File Name: students.ts
Author: Lexter Paule
Date: October 27. 2026

Overview: Defines the strict Student schema and structures an array of records across all high school 
grades with validated numerical averages, serves as the data layer providing the core TypeScript interface 
and initial student record array for the application, exports the Student interface and the initial students 
array for consumption across the portal components.
*/ 

// Student Interface
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}


// Initial Students Array
export const students: Student[] = [
  {
    id: 1,
    firstName: "Charles",
    lastName: "Challenge",
    grade: 9,
    average: 85,
  },
  {
    id: 2,
    firstName: "Aethan",
    lastName: "Assessment",
    grade: 10,
    average: 78,
  },
  {
    id: 3,
    firstName: "Tanya",
    lastName: "Test",
    grade: 11,
    average: 82,
  },
  {
    id: 4,
    firstName: "Bart",
    lastName: "Benchmark",
    grade: 12,
    average: 91,
  },
  {
    id: 5,
    firstName: "Anastasia",
    lastName: "Severskaya",
    grade: 12,
    average: 75,
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Cope",
    grade: 9,
    average: 72,
  },
  {
    id: 7,
    firstName: "Ellington",
    lastName: "Baxter",
    grade: 10,
    average: 68,
  },
  {
    id: 8,
    firstName: "Katherine",
    lastName: "Evans",
    grade: 11,
    average: 88,
  },
];