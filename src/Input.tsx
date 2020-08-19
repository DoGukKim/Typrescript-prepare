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
interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}
export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}>{children}</form>;
