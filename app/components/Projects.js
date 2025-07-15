import ProjectTemp from "./ProjectTemp";

export default function Projects() {
  return (
    <div className="py-2 flex flex-col gap-4">
      <ProjectTemp
        title="Class-Room Attendance & Feedback System"
        techno="HTML /  CSS /  HTML5 /  Node.js /  Express.js /  SQL / MySQL"
        desc="Developed a secure and dynamic student attendance system that generates QR codes based on the current date. Each day a new QR code is created, ensuring valid and time-specific check-ins. Used MongoDB for storing user data and Express for backend APIs."
        gitlink="https://github.com/Pratham-008/-Class-Room-Attendance-Feedback-System-Admin-"
      />
      <ProjectTemp
        title="Multi-Vendor E-Commerce Platform"
        techno="React.js / Styled-Components /  Next.js /  MongoDB /  Tailwind CSS /  Razor-pay /  Express.js"
        desc="Built a multi-vendor e-commerce platform with vendor product management, customer shopping cart, and secure payments using Razor-pay. Includes an admin panel for managing products and pricing. Developed with React, Next.js, MongoDB, and styled-components."
        gitlink="https://github.com/Pratham-008/E-commerce-client"
        livelink="https://e-commerce-client-hazel.vercel.app/"
      />
      <ProjectTemp
        title="AI-Powered Website Builder "
        techno="React.js /  Tailwind CSS /  TypeScript /  WebContainer API / GROK API / Express.js /  Node.js"
        desc="Created a no-code website builder that allows users to generate and preview websites live in-browser with auto file structure generation and code preview.  "
        gitlink="https://github.com/Pratham-008/website-to-create-website-"
      />
    </div>
  );
}
