import React from "react";

type GreetProps = {
  //string, number, boolean props type
  name: string;
  messageCount?: number; //we can add the ? to never mind if null
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  //specify optional props
  const {messageCount = 0} = props
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
