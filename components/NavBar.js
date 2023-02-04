import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
        className="hello"
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
