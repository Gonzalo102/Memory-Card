import React from "react";
import { ReactDOM } from "react";
import reactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "40px 50px",
  zIndex: 1000,
  border: "1px solid black",
  textAlign: "center",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .3)",
  zIndex: 1000,
};

const BUTTON_STYLES = {
  padding: "10px",
  marginTop: "20px",
};

export default function GameOverModal({
  gameOver,
  resetGame,
  score,
  bestScore,
}) {
  if (!gameOver) return null;

  return reactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h2>Game Over</h2>
        <h5>Your Score: {score}</h5>
        <h5>Best Score so far: {bestScore}</h5>
        <p>Come on! You can do it!</p>
        <button style={BUTTON_STYLES} onClick={resetGame} type="button">
          Restart
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
