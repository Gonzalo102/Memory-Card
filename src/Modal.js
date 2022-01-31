import React from "react";
import { ReactDOM } from "react";
import reactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  border: "1px solid black",
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

export default function Modal({ open, closeModal }) {
  if (!open) return null;

  return reactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h2>Memory Card</h2>
        <h4>
          <em>Game Instructions</em>
        </h4>
        <p>
          Click on every Among, but only once. Be careful, they mix. If you
          click on an Among that you have already clicked the score resets to
          zero. Score 12 points to win the game.
        </p>
        <p>How good is your memory?</p>
        <button onClick={closeModal} style={BUTTON_STYLES} type="button">
          Start Game
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
