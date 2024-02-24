import Link from "next/link";

const variants = {
  basic: "p-",
};

type NavLinkProps = {
  link: string;
};

export const NavLink = ({ link }: NavLinkProps) => {
  return (
    <Link className="px-8 text-text-primary" href={link}>
      NavLink
    </Link>
  );
};
