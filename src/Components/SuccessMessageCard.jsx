import PropTypes from "prop-types";

const SuccessMessageCard = ({ onClose, message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-8 rounded-lg shadow-lg max-w-md w-full m-4 bg-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-black">{message}</h2>
        <button
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

SuccessMessageCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default SuccessMessageCard;
