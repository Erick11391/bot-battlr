import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy, deleteBot }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={addToArmy} onDelete={deleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

