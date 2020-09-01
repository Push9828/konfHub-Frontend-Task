import React, { useState } from "react";

const SearchBar = ({ getSearch }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getSearch(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Conference"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchBar;
