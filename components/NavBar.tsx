"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const router = useRouter();
  const childrenPathArray = ["/issues/new"];
  const linkClassName = (link: any) => {
    return currentPath === link.href ||
      (childrenPathArray.includes(currentPath) && link.href === "/issues")
      ? "link-active"
      : "link-not-active";
  };
  return (
    <Toolbar
      className="toolbar"
      start={
        <>
          <Button text onClick={() => router.push("/")}>
            <FaBug size="1.5rem" />
          </Button>
          {links.map((link, index) => (
            <Button
              key={index}
              className={linkClassName(link)}
              link
              label={link.label}
              onClick={() => router.push(link.href)}
            />
          ))}
        </>
      }
    />
  );
};

export default NavBar;
