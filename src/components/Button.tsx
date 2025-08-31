import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg ${className}`}
      target="blank"
    >
      {children}
    </Link>
  );
};

export default Button;
