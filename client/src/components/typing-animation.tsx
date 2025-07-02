import { useState, useEffect } from "react";

interface TypingAnimationProps {
  roles: string[];
  className?: string;
}

export default function TypingAnimation({ roles, className = "" }: TypingAnimationProps) {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(role.substring(0, currentText.length - 1));
      } else {
        setCurrentText(role.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRole, roles]);

  return (
    <span className={`typing-cursor ${className}`}>
      {currentText}
    </span>
  );
}
