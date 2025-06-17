import { useState } from "react";

const Players = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const onIsEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const onPlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={onPlayerNameChange}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Players;
