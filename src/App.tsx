import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function App() {
  const fotoContainerRef = useRef(null);

  const fotoSendiriScroll = useScroll({
    target: fotoContainerRef,
    offset: ["center center", "end end"],
  });

  const transformFotoSendiri = useTransform(
    fotoSendiriScroll.scrollY,
    [0, 850],
    ["0rem", "-15rem"]
  );

  return (
    <main>
      <div ref={fotoContainerRef} className="absolute">
        <motion.img
          style={{ bottom: transformFotoSendiri }}
          src="/foto_sendiri.png"
          alt="foto Chandra"
          className="foto-sendiri"
        />
      </div>

      <header>
        <h1>
          When Hobby
          <br />
          become <span className="passion">Passion</span>
        </h1>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          My name is Muhammad Chandra Hasan, a Junior Web Developer Based on
          Pinrang, South Sulawesi, Indonesia. My passion is to learn more about
          world of programming and my hobby is making websites and web
          applications.
        </p>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <p>
          I always use my free time to learn something new about programming.
        </p>

        <div className="skill-container">
          <SkillCard percentage={90} title="Frontend Web Development" />
          <SkillCard percentage={92} title="Backend Web Development" />
          <SkillCard percentage={78} title="Web Design" />
          <SkillCard percentage={82} title="Python Automation" />
          <SkillCard percentage={75} title="React Native Development" />
          <SkillCard percentage={41} title="Android Development" />
        </div>
      </section>
    </main>
  );
}

function SkillCard({title, percentage}:{percentage: number,title: string}) {
  const calculateOffset = (p:number) => {
    const output = 184.78073120117188 * ((100 - p) / 100)

    return output
  }

  return (
    <div className="skill">
      <svg xmlns="http://www.w3.org/2000/svg" height="72" width="72">
        <path
          className="bg"
          stroke="#1e293b"
          d="M 22 70 a 34 34 0 1 1 28 0"
          fill="none"
          strokeWidth="4px"
        />
        <path
          className="meter"
          stroke="#f1f5f9"
          d="M 22 70 a 34 34 0 1 1 28 0"
          fill="none"
          strokeDasharray="184"
          strokeDashoffset={calculateOffset(percentage)}
          strokeWidth="4px"
        />
        <text x="20" y="44" fill="#f1f5f9">{percentage}%</text>
      </svg>

      <h5>{title}</h5>
    </div>
  );
}
