import React from 'react';

const Button = ({ onClick, className, style, text }) => {
  return (
    <button onClick={onClick} className={className} style={style}>
      {text}
    </button>
  );
};

export default Button;
