/*
This component displays an input for searching students.
It receives the current search text and a callback through props.
When the user types, it sends the new text to StudentPortal.
It displays the current search text in a controlled input.
*/

"use client";

// Describe the props received from StudentPortal.
interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  return (
    <div className="w-full">
      {/* Label and controlled search input */}
      <label
        htmlFor="student-search"
        className="mb-2 block text-sm font-medium"
      >
        Search students by name
      </label>

      <input
        id="student-search"
        type="text"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Enter a student's name"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2"
      />
    </div>
  );
};

export default SearchBox;