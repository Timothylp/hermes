import React from "react";

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  setValue: (value: string) => void;
};

function Input(props: InputProps) {
  const { setValue, ...rest } = props;
  const className = `w-full rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none ${props.className ?? ""}`;
  return <input type="text" value="" onChange={(e) => props.setValue(e.target.value)} className={className} {...rest} />;
}

export default Input;
