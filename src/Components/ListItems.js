import React from "react";
import "./ListItems.css";

function ListItems(props) {
  const items = props.items;
  const listitems = items.map((items) => {
    return (
      <div className="list" key="item.key">
        <p>{items.text}</p>
      </div>
    );
  });
  return <div>{listitems}</div>;
}

export default ListItems;
