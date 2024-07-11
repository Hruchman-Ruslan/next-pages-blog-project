import Link from "next/link";

import Logo from "./logo";

export interface MainNavigationProps {}

export default function MainNavigation({}: MainNavigationProps) {
  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
