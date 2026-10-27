/*
This component creates the main page of the student portal.
It does not receive any props.
It imports the StudentPortal component.
It displays StudentPortal as the content of the page.
*/

import StudentPortal from "@/components/StudentPortal";

// Display the student portal on the home page.
const Home = () => {
  return <StudentPortal />;
};

export default Home;