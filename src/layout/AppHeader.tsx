import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { Utils } from "@/lib/utils";
import { NavItem } from "@/types";
import Logo from "@/components/Logo";

interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { id: "about", label: "About us", href: "#" },
  { id: "contact", label: "Contact", href: "#" },
];

const AppHeader: React.FC<AppHeaderProps> = ({
  className,
  navItems = defaultNavItems,
  ...props
}) => {
  return (
    <header
      className={Utils.cn("py-4 min-h-14 text-white", className)}
      {...props}
    >
      {/* Mobile Nav */}
      <nav className="flex justify-between items-center lg:hidden">
        <div />
        <Logo width={105} height={45} isMobile />
        <Button aria-label="Toggle Navigation Menu" data-testid="menu-button">
          <Image
            src="/images/icons/menu.svg"
            alt="Menu Icon"
            width={20}
            height={12}
          />
        </Button>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex justify-between items-center font-figtree font-semibold text-lg text-muted">
        <Logo width={173} height={74} />
        <ul
          className="flex gap-8"
          role="navigation"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                prefetch={true}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
