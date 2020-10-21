import React from "react";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default List;
