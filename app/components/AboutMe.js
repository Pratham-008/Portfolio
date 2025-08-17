export default function AboutMe() {
  return (
    <section className="flex flex-col gap-6 max-w-xl mx-auto ">
      <div className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
        Hello! I&apos;m{" "}
        <span className="font-bold text-zinc-700 dark:text-zinc-300">
          Patel Prathamkumar Kanubhai
        </span>
        ,<br />a passionate and dedicated Computer Engineering student at
        <br />
        <span className="font-bold text-zinc-700 dark:text-zinc-300">
          Kadi Sarva Vishwavidyalaya University
        </span>
        ,<br />
        currently in my 7th semester with a{" "}
        <span className="font-bold text-zinc-700 dark:text-zinc-300">
          CPI of 7.13
        </span>
        .
      </div>
      <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        <span className="font-semibold">Specialization:</span> Full-stack web
        development (MERN stack &amp; Next.js).
        <br />
        <span className="font-semibold">Key Interests:</span>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Creating intelligent, user-friendly interfaces</li>
          <li>Exploring AI-powered tools and APIs</li>
          <li>Working on real-world projects that solve problems</li>
        </ul>
      </div>
      <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        <span className="font-semibold">Projects:</span>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>QR Code-based Attendance System</li>
          <li>Multi-Vendor E-Commerce Platform</li>
          <li>AI-powered Website Builder with Grok-API</li>
           <li>Socket.IO Based Real Time Chat Application</li>
        </ul>
      </div>
      <div className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed text-center italic">
        I love learning and constantly upgrading my skills.
        <br />
        <span className="font-bold text-zinc-700 dark:text-zinc-300">
          Always looking for exciting opportunities{" "}
        </span>
        where I can contribute, learn, and grow as a developer.
      </div>
    </section>
  );
}
