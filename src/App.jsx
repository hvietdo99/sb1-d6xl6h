import React, { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoClickPower, setAutoClickPower] = useState(0);
  const [upgradeCost, setUpgradeCost] = useState(10);
  const [autoClickerCost, setAutoClickerCost] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      setScore(prevScore => prevScore + autoClickPower);
    }, 1000);

    return () => clearInterval(timer);
  }, [autoClickPower]);

  const handleClick = () => {
    setScore(prevScore => prevScore + clickPower);
  };

  const buyUpgrade = () => {
    if (score >= upgradeCost) {
      setScore(prevScore => prevScore - upgradeCost);
      setClickPower(prevPower => prevPower + 1);
      setUpgradeCost(prevCost => Math.round(prevCost * 1.5));
    }
  };

  const buyAutoClicker = () => {
    if (score >= autoClickerCost) {
      setScore(prevScore => prevScore - autoClickerCost);
      setAutoClickPower(prevPower => prevPower + 1);
      setAutoClickerCost(prevCost => Math.round(prevCost * 1.5));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">React Clicker Game</h1>
        <h2 className="text-2xl mb-4">Score: {score}</h2>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-xl mb-6 transition duration-200"
        >
          Click Me!
        </button>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Upgrades</h3>
          <div>
            <button
              onClick={buyUpgrade}
              disabled={score < upgradeCost}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              Upgrade Click Power (Cost: {upgradeCost})
            </button>
            <p className="mt-1">Current Click Power: {clickPower}</p>
          </div>
          <div>
            <button
              onClick={buyAutoClicker}
              disabled={score < autoClickerCost}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mr-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
            >
              Buy Auto Clicker (Cost: {autoClickerCost})
            </button>
            <p className="mt-1">Current Auto Click Power: {autoClickPower}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;