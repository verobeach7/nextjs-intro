import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";

// getServerSideProps의 리턴 object에서 results를 가져와 페이지 컴포넌트의 props로 넣어줌
export default function Home({ results }) {
  const router = useRouter();
  /* const onClick = (id, title) => {
    // router.push(`/movies/${id}`);
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  }; */
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <Link
          //   onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              title: movie.original_title,
            },
          }}
          as={`/movies/${movie.id}`}
        >
          {/* <div onClick={()=>onClick(movie.id)} className="movie"> */}
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// object를 return함. props key의 value에 원하는 데이터를 넣을 수 있음.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
