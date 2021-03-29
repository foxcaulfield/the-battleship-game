import ControlButtons from "./ControlButtons/ControlButtons";
import Stats from "./Stats/Stats";
import Board from "./Board/Board";

function Interface() {
  return (
    <div>
      <ControlButtons /> <Stats />
      <Board />
    </div>
  );
}

export default Interface;
