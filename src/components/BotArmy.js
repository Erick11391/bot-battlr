import React from "react";
import BotCard from "./BotCard";

function BotArmy({ army, removeFromArmy, deleteBot }) {
  return (
    <div>
      <h2> Bot Army</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRemove={removeFromArmy}
            onDelete={deleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotArmy;
