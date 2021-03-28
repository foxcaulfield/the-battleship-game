function FieldSquare(props) {
  return (
    <button
      id={props.buttonId}
      onClick={(e) => props.getGuess(e.target.innerHTML)}
    >
      {props.buttonValue}
    </button>
  );
}

export default FieldSquare;
