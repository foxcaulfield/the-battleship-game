import ControlButtons from "./ControlButtons/ControlButtons";
import Stats from "./Stats/Stats";
import Board from "./Board/Board";

function Interface() {
  return (
    <div>
      <ControlButtons /> <Board /> <Stats />
    </div>
  );
}

export default Interface;
