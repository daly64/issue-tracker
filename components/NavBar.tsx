"use client";
import classNames from "classnames";
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

  const linkClassName = (link: any) => {
    console.log(currentPath);

    if (
      currentPath === link.href ||
      (currentPath === "/issues/new" && link.href === "/issues")
    ) {
      return "link-active";
    } else {
      return "link-not-active";
    }

    /*     return classNames({
      "link-active": link.href === currentPath,
      "link-not-active": link.href !== currentPath,
    }); */
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
