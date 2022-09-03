import React from "react";

const Book = (props) => {
    return props.name ? (
    <div className={props.name} data-text = "">
      <h2>Hello, {props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
      </div>
    ) : null;
  };

  export {Book};