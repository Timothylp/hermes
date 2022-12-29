
import React from 'react'

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

function Button(props: ButtonProps) {
  const className = `rounded-md bg-indigo-800 p-2 text-white hover:bg-indigo-600 ${props.className}`;
  return <button {...props} className={className} />
}

export default Button