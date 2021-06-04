/* eslint react/button-has-type: "off" */
import React from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const OutlinedButton: React.FC<IButtonProps> = ({
  children,

  ...rest
}) => (
  <button
    className="font-semibold border border-black py-2 px-6 shadow-md"
    {...rest}
  >
    {children}
  </button>
);

export default OutlinedButton;
