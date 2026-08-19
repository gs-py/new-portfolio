import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";

const socials = [
  { icon: <FaGithub />, path: profile.github, label: "GitHub" },
  { icon: <FaLinkedinIn />, path: profile.linkedin, label: "LinkedIn" },
  { icon: <FiMail />, path: `mailto:${profile.email}`, label: "Email" },
];

const Social = ({ containerStyles = "flex gap-4", iconStyles = "" }) => (
  <div className={containerStyles}>
    {socials.map((item) => (
      <Link
        key={item.label}
        href={item.path}
        aria-label={item.label}
        target={item.path.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`neu-press flex h-12 w-12 items-center justify-center rounded-full text-[17px] text-ink-muted hover:text-accent ${iconStyles}`}
      >
        {item.icon}
      </Link>
    ))}
  </div>
);

export default Social;
