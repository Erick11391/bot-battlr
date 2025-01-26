import React from "react";

function BotCard({ bot, onEnlist, onRemove, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: "150px", height: "150px" }} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>

      {onEnlist && (
        <button
          onClick={() => onEnlist(bot)}
          style={{ backgroundColor: "#4CAF50", color: "white", padding: "0.5rem", marginRight: "0.5rem" }}
        >
          Enlist Bot
        </button>
      )}
      {onRemove && (
        <button
          onClick={() => onRemove(bot)}
          style={{ backgroundColor: "#FF9800", color: "white", padding: "0.5rem", marginRight: "0.5rem" }}
        >
          Remove
        </button>
      )}
      <button
        onClick={() => onDelete(bot)}
        style={{ backgroundColor: "#F44336", color: "white", padding: "0.5rem" }}
      >
        Discharge
      </button>
    </div>
  );
}

export default BotCard;

