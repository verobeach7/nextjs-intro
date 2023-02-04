import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link style={{ textDecoration: "none" }} href="/">
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link style={{ textDecoration: "none" }} href="/about">
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>
      {/* style은 html 고유 tag */}
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
