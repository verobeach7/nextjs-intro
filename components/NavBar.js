import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"; // css module: normal css를 사용할 수 있게 해줌

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        // .join은 배열 안의 item을 하나의 문자열로 바꾸는 method
        className={[
          styles.link,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
