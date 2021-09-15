import React from 'react';

const Button = ({ tekstas, klase }) => {
  return <button className={klase}>{tekstas}</button>;
};

export default Button;
