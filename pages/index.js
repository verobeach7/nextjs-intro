import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "f0c6d61ec6f0982e9ba19ec4ec010a8d";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })(); // 익명함수를 바로 실행하기 위해서 () 붙여주는 것!!!
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
