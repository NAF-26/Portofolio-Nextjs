import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const icons = [
  { Comp: FaHtml5, title: "HTML" },
  { Comp: FaCss3Alt, title: "CSS" },
  { Comp: FaJs, title: "JavaScript" },
  { Comp: FaReact, title: "React" },
  { Comp: FaGitAlt, title: "Git" },
  { Comp: FaGithub, title: "GitHub" },
  { Comp: SiFlutter, title: "Flutter" },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...icons, ...icons];

  return (
    <div className={`skill-marquee ${reverse ? "reverse" : ""}`}>
      <div className="skill-track">
        {doubled.map(({ Comp, title }, i) => (
          <div
            className="skill-item"
            key={`${title}-${i}`}
            title={title}
            aria-label={title}
          >
            <Comp />
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills-wrap">
      <h2 className="skills-title">My Skills</h2>
      <Row />
      <Row reverse />
    </div>
  );
}
