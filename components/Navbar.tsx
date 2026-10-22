/*

This component displays the school navigation bar.
It does not receive any props.
It uses anchor links to reach sections on the same page.
It displays the school name and three navigation links.
*/

const Navbar = () => {
  return (
    <header className="bg-blue-950 text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between"
      >
        {/* School name */}
        <p className="text-xl font-bold">
          New Generation High School
        </p>

        {/* Links to the three page sections */}
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#overview" className="hover:underline">
            Overview
          </a>

          <a href="#students" className="hover:underline">
            Students
          </a>

          <a href="#add-student" className="hover:underline">
            Add a student
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;