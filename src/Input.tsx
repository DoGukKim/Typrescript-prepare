import React from "react";

export const Input: React.FunctionComponent = () => (
  <>
    <input placeholder="Name" type="text" />
  </>
);
export const Form: React.FunctionComponent = ({ children }) => (
  <form>{children}</form>
);
