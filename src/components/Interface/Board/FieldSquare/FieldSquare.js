function FieldSquare(props) {
  return (
    <button
      disabled={props.disabled}
      id={props.buttonId}
      onClick={(e) => props.getGuess(e.target.innerHTML)}
    >
      {props.buttonValue}
    </button>
  );
}

export default FieldSquare;
