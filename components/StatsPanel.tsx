/*
This component displays three student statistics.
It receives the numbers through props from StudentPortal.
It arranges the numbers in a responsive grid.
It displays the total students, honour roll count and grade 12 count.
*/

// Describe the props received from StudentPortal.
interface StatsPanelProps {
  totalStudents: number;
  honourRollCount: number;
  grade12Count: number;
}

const StatsPanel = ({
  totalStudents,
  honourRollCount,
  grade12Count,
}: StatsPanelProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {/* Total number of students */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-sm font-medium">Students</h3>
        <p className="mt-2 text-3xl font-bold">{totalStudents}</p>
      </div>

      {/* Number of students on the honour roll */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-sm font-medium">Honour roll</h3>
        <p className="mt-2 text-3xl font-bold">{honourRollCount}</p>
      </div>

      {/* Number of grade 12 students */}
      <div className="rounded-lg border bg-white p-6">
        <h3 className="text-sm font-medium">Graduating</h3>
        <p className="mt-2 text-3xl font-bold">{grade12Count}</p>
      </div>
    </div>
  );
};

export default StatsPanel;