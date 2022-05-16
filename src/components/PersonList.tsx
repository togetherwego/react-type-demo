import React from "react";

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = () => {
  return (
    <div>
      {props.names.map((name) => {
        return <h2></h2>;
      })}
    </div>
  );
};
