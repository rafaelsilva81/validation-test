import React, { useEffect } from "react";

type PossibleValidation = RegExp;

type InputProps = {
  validate?: PossibleValidation;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({ validate, ...html }: InputProps) => {
  const [valid, setValid] = React.useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      const { value } = e.target;
      const valid = validate.test(value);
      e.target.setCustomValidity(valid ? "" : "Invalid");
      setValid(valid);
    }

    if (html.onChange) {
      html.onChange(e);
    }
  };

  useEffect(() => {
    console.log("valid", valid);
  }, [valid]);

  return <input onChange={change} {...html} />;
};

export default Input;
