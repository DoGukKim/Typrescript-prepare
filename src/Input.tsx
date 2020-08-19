import React from "react";

interface IInputProps {
  value: string;
  onchange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onchange,
}) => (
  <>
    <input placeholder="Name" type="text" value={value} onChange={onchange} />
  </>
);
export const Form: React.FunctionComponent = ({ children }) => (
  <form>{children}</form>
);
