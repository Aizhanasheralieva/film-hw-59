import React, { useState } from 'react';
import FilmItem from '../../components/FilmItem/FilmItem.tsx';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [newFilm, setNewFilm] = useState('');

  const addFilm = () => {
    if (newFilm.trim() === '') {
      return newFilm;
    }
    setFilms([...films, {id: String(new Date), name: newFilm}]);
    setNewFilm('');
  };

  const deleteFilm = (id) => {
    setFilms(films.filter(movie => movie.id !== id));
  };



  return (
    <div className="container">
      <h1>Tracking new films</h1>
      <input
        className="form-control col-2"
        type="text"
        value={newFilm}
        onChange={(e) => setNewFilm(e.target.value)}
        placeholder="Enter the film title"
      />
      <button onClick={addFilm}>Add</button>

      <div>
        {films.map((film) => (
          <FilmItem
            key={film.id}
          film={film}
          onDelete={deleteFilm}
          />
        ))}
      </div>
    </div>);
};

export default Films;
