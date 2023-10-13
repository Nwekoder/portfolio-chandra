import { ReactNode } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

type SkillCardProps = {
  icon: ReactNode;
  name: string;
  star_rating: number;
};

const my_skills: SkillCardProps[] = [
  {
    icon: <Icon icon="devicon:react" width={90} height={90} />,
    name: "React",
    star_rating: 2,
  },
  {
    icon: <Icon icon="logos:nextjs" width={90} height={90} fill="#FFFFFF" />,
    name: "Next.js",
    star_rating: 2,
  },
  {
    icon: <Icon icon="logos:svelte-icon" width={90} height={90} />,
    name: "Svelte",
    star_rating: 2,
  },
  {
    icon: <Icon icon="logos:javascript" width={90} height={90} />,
    name: "Javascript",
    star_rating: 2,
  },
  {
    icon: <Icon icon="vscode-icons:file-type-python" width={90} height={90} />,
    name: "Python",
    star_rating: 2,
  },
  {
    icon: <Icon icon="vscode-icons:file-type-html" width={90} height={90} />,
    name: "HTML",
    star_rating: 3,
  },
  {
    icon: <Icon icon="devicon:css3" width={90} height={90} />,
    name: "CSS",
    star_rating: 3,
  },
  {
    icon: <Icon icon="vscode-icons:file-type-node" width={90} height={90} />,
    name: "Node.JS",
    star_rating: 2,
  },
  {
    icon: <Icon icon="logos:laravel" width={90} height={90} />,
    name: "Laravel",
    star_rating: 1,
  },
  {
    icon: <Icon icon="logos:sass" width={90} height={90} />,
    name: "Sass",
    star_rating: 2,
  },
  {
    icon: <Icon icon="vscode-icons:file-type-less" width={90} height={90} />,
    name: "Less",
    star_rating: 3,
  },
  {
    icon: <Icon icon="logos:tailwindcss-icon" width={90} height={90} />,
    name: "TailwindCSS",
    star_rating: 2,
  },
].sort((a, b) => b.star_rating - a.star_rating);

export default function App() {
  return (
    <main>
      <div className="foto-sendiri">
        <img src="/foto_sendiri.png" alt="Foto Sendiri" />
      </div>

      <header className="heading">
        <h1>
          When Hobby
          <br />
          becomes <span className="passion">Passion</span>
        </h1>
      </header>

      <section className="about-section">
        <h2>Hello, there!</h2>
        <p>
          My name is Muhammad Chandra Hasan, I'm Junior Web Developer based on
          Pinrang, South Sulawesi, Indonesia. My hobby is to learn something new
          about programming especially web development.
        </p>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <p>
          Some of my skills isn't just about Web Development. You may want to
          explore all of it.
        </p>

        <div className="skills">
          {my_skills.map((ms, i) => (
            <SkillCard
              icon={ms.icon}
              name={ms.name}
              star_rating={ms.star_rating}
              key={i}
            />
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in touch with me</h2>
        <p>I'm available for freelancing and remote job. If you need to make website or web application, I'm always ready to help.</p>
        <p>Just let me know when you need me.</p>

        {/* TODO: Make form that send email to me and send one to user's as feedback */}
      </section>
    </main>
  );
}

function SkillCard(props: SkillCardProps) {
  const getRatingDescription = (rating: number) => {
    switch (rating) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Expert";
    }
  };

  return (
    <div className="skill-card">
      {props.icon}

      <h5>{props.name}</h5>

      <div className="star-rating">
        {props.star_rating === 1 && (
          <>
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#FAD516"
            />
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#F1F5F9"
            />
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#F1F5F9"
            />
          </>
        )}
        {props.star_rating === 2 && (
          <>
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#FAD516"
            />
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#FAD516"
            />
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#F1F5F9"
            />
          </>
        )}
        {props.star_rating === 3 && (
          <>
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#FAD516"
            />
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#FAD516"
            />
            <Icon
              icon="solar:star-bold"
              width={24}
              height={24}
              color="#FAD516"
            />
          </>
        )}
      </div>

      <p>{getRatingDescription(props.star_rating)}</p>
    </div>
  );
}
