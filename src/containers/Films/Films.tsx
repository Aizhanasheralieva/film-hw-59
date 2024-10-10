import React, { useState } from "react";
import FilmItem from "../../components/FilmItem/FilmItem.tsx";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [newFilm, setNewFilm] = useState("");

  const addFilm = () => {
    if (newFilm.trim() === "") {
      return newFilm;
    }
    setFilms([...films, { id: String(new Date()), name: newFilm }]);
    setNewFilm("");
  };

  const deleteFilm = (id) => {
    setFilms(films.filter((movie) => movie.id !== id));
  };

  const editFilm = (id, newName) => {
    setFilms(
      films.map((film) => (film.id === id ? { ...film, name: newName } : film)),
    );
  };

  return (
    <div className="container">
      <h1>Tracking new films</h1>
      <div className="input-group mb-3">
        <input
          className="form-control col-auto"
          type="text"
          value={newFilm}
          onChange={(e) => setNewFilm(e.target.value)}
          placeholder="Enter the film title"
        />
        <button className="btn btn-primary" onClick={addFilm}>
          Add
        </button>
      </div>

      <div>
        {films.length > 0 ? (
          films.map((film) => (
            <FilmItem
              key={film.id}
              film={film}
              onDelete={deleteFilm}
              onEdit={editFilm}
            />
          ))
        ) : (
          <p>
            <i>Any films in the list yet!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default Films;
