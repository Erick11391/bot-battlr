import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";
function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from JSON server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Add a bot to the army
  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Remove a bot from the army
  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Permanently delete a bot
  const deleteBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="App">
      <h1>Welcome to Bot Battlr</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} deleteBot={deleteBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
