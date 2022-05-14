import React from "react";

type GreetProps = {
  //string, number, boolean props type
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `Hallo ${props.name}, You have ${props.messageCount} unread message`
          : " Welcome Guest"}
      </h1>
    </div>
  );
};
