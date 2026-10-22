/*
File: Footer.tsx
Author: Rupinder Kaur
Date: October 22, 2026
This component displays the school footer.
It does not receive any props.
It arranges the school name and contact details using Tailwind.
It displays the address, phone number and email at the bottom of the page.
*/

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      {/* School name and sample contact details */}
      <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 text-sm">
        <p className="text-lg font-bold">
          New Generation High School
        </p>

        <address className="space-y-1 not-italic">
          <p>123 School Avenue, Calgary, Alberta</p>
          <p>Phone: 403-555-0100</p>
          <p>Email: office@newgeneration.example</p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;