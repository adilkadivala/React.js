import './style.css';

const Detail = ({ onBack }) => {
  return (
    <>
      <div>Detail</div>
      <button
        onClick={() => {
          onBack(null);
        }}
      >
        Go Home
      </button>
    </>
  );
};

export default Detail;
