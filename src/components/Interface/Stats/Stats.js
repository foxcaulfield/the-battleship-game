import { connect } from "react-redux";
import styles from "./Stats.module.css";

function Stats(props) {
  return (
    <section className={styles.stats}>
      <span className="emoji" role="img" aria-label="heart">
        ❤️
      </span>
      {props.boardReducer.attemptsLeft}
    </section>
  );
}

let mapStateToProps = (state) => {
  return {
    boardReducer: state.boardReducer,
  };
};

export default connect(mapStateToProps, null)(Stats);
