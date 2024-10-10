import React from "react";

const FilmItem = React.memo(
  ({ film, onDelete, onEdit }) => {
    return (
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          value={film.name}
          onChange={(e) => onEdit(film.id, e.target.value)}
        />
        <button className="btn btn-danger" onClick={() => onDelete(film.id)}>
          X
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.film.name === nextProps.film.name;
  },
);

export default FilmItem;
