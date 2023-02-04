import NavBar from "./NavBar";

// children: react.js가 제공하는 prop, 하나의 컴포넌트를 또 다른 컴포넌트에 넣을 때 사용
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
