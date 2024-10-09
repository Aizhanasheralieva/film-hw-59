import React from "react";

const FilmItem = React.memo(({ film, onDelete, onEdit }) => {
  return (
    <div>
      <input
        type="text"
        value={film.name}
        onChange={(e) => onEdit(film.id, e.target.value)}
      />
      <button onClick={() => onDelete(film.id)}>Delete</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.film.name === nextProps.film.name;
});

export default FilmItem;
