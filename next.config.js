/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", // 이전 주소로 누군가 접근하면
        destination: "/new-sexy-blog/:path*", // 자동으로 새로운 주소로 바꿔줌
        permanent: false,
      },
      // 여러개의 redirect가 필요하면 객체{}를 계속해서 생성해주면 됨
    ];
  },
  // rewrites는 redirect를 시키지만 사용자에게 변경된 url을 보여주지 않음!!!
  // 개발자도구 Network 탭에서도 숨겨짐
  // API_KEY 등 사용자에게 보여주지 않아야 하는 정보가 있을 때 필수적으로 사용!!!
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

const API_KEY = process.env.API_KEY;

module.exports = nextConfig;
