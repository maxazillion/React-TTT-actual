import PropTypes from "prop-types";

const Square = ({ num, content, handler }) => (
  <div
    data-num={num}
    onClick={handler}
    className="border-2 h-24 w-24 border-black"
  >
    {content}
  </div>
);

Square.propTypes = {
  num: PropTypes.number.isRequired,
  content: PropTypes.oneOf(["X", "O"]),
  handler: PropTypes.func.isRequired,
};

export default Square;
