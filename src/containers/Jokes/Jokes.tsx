// import React, { useEffect, useState } from "react";
//
// const Jokes = () => {
//   const [jokes, setJokes] = useState<"" | null>(null);
//   let url = "https://api.chucknorris.io/jokes/random";
//
//   const fetchData = async (url) => {
//     const response = await fetch(url);
//
//     if (response.ok) {
//       const jokes = await response.json();
//       return jokes;
//     }
//   };
//
//   fetchData(url).catch((e) => console.error(e));
//
//   useEffect(() => {
//     if (jokes === null) {
//       console.log("I do not do anything!");
//     }
//   }, [jokes]);
//   return <div></div>;
// };
//
// export default Jokes;
