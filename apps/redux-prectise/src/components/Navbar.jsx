import Button from './Button';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 2rem',
      }}
    >
      <p style={{ fontSize: '24px', fontStyle: 'italic', fontWeight: 'bold' }}>
        Navbar
      </p>

      <Button style={{ padding: '0.7rem ' }} text="cart" />
    </div>
  );
};

export default Navbar;
