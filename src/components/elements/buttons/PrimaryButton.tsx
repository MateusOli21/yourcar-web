/* eslint react/button-has-type: "off" */
import React from 'react';

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <button
    className="bg-red-500 text-white font-semibold rounded py-2 px-6 shadow-md hover:bg-red-600 transition duration-300"
    {...rest}
  >
    {children}
  </button>
);

export default PrimaryButton;
