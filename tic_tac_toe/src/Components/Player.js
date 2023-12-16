import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit((edit) => !edit);

    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  }

  const inputChangeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  let editiblePlayerName = <span className="player-name">{playerName}</span>;

  if (isEdit) {
    editiblePlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={inputChangeHandler}
        required
      />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editiblePlayerName}
          <span className="player-symbol">{symbol}</span>
          <button onClick={editHandler}>{isEdit ? "Save" : "Edit"}</button>
        </span>
      </li>
    </>
  );
};

export default Player;
