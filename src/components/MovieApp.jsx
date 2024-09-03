import React from "react";
import "./MovieApp.css";
import { AiOutlineSearch } from "react-icons/ai";

const MovieApp = () => {
  return (
    <div>
      <h1>MovieHouse</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movie"
          value=""
          onChange=""
          className="search-input"
        />
        <button onClick="" className="search-button">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default MovieApp;
