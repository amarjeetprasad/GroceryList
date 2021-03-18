import React from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((e) => {
        const { id, name, quantity, image } = e;
        return (
          <article key={id} className="person">
            <img src={image} alt={image} />
            <div>
              <h4>{name}</h4>
              <p>{quantity}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
