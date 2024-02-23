"use client";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { FaBug } from "react-icons/fa";
import { PrimeReactContext } from "primereact/api";
import { useContext } from "react";
const NavBar = () => {
  let primeContext = useContext(PrimeReactContext);

  const handleClick = (theme: string) => {
    const oldTheme = theme === "dark" ? "light" : "dark";
    primeContext &&
      primeContext.changeTheme &&
      primeContext.changeTheme(
        `/themes/lara-${oldTheme}-blue/theme.css`,
        `/themes/lara-${theme}-blue/theme.css`,
        "theme-link"
      );
  };

  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  const router = useRouter();
  const linkClassName = (link: any) =>
    classNames({
      "link-active": link.href === currentPath,
      link: link.href !== currentPath,
    });

  return (
    <Toolbar
      className="toolbar"
      start={
        <>
          <Button label="dd" onClick={() => handleClick("dark")} />
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
