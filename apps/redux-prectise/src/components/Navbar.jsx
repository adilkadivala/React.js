import { useState } from 'react';
import Button from './Button';

const Navbar = ({ handleCart }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 2rem',
        position: 'relative',
      }}
    >
      <p style={{ fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold' }}>
        Navbar
      </p>

      <Button style={{ padding: '0.7rem ' }} text="cart" onClick={handleCart} />
    </div>
  );
};

export default Navbar;
