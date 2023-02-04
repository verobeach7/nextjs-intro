import Seo from "@/components/Seo";
import { useRouter } from "next/router";

// 컴포넌트 내부에서 router를 사용하면 router는 프론트에서만 실행됨!!!
export default function Detail({ params }) {
  const router = useRouter();
  /* 기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다는건 다들 아실겁니다. 
  이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태입니다. 
  그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고, 
  js가 내려가서 다시 렌더링하게되면 그 때는 빈 배열이 아닌 router.query.params에서 
  값을 가져와서 뿌려주는거죠. 페이지 소스에 <h4></h4>만 있고 영화제목이 없음. */
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// 사용자가 어떤 경험을 원하는지에 따라 아래 SSR을 사용할지 말지 선택하면 됨
// SEO에 최적화되게 만들고 싶을 때 사용
// 페이지 소스에서 <h4>Movie Title</h4>을 찾아볼 수 있음.
export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: { params },
  };
}
