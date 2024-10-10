import React, { useEffect, useState } from 'react';
import JokeDemonstration from '../../components/JokeDemonstration/JokeDemonstration.tsx';


const Joke = () => {
  const [joke, setJoke] = useState<string | null>(null);

  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchJoke = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.error('Error fetching jokes:', response.statusText);
        return;
      }

      const data = await response.json();
      setJoke(data.value);

    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Chuck Norris Jokes</h1>
      <JokeDemonstration joke={joke}/>

      <button className="btn btn-primary mt-3" onClick={fetchJoke}>
        Receive another joke
      </button>
    </div>
  );
};

export default Joke;
