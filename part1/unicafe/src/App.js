import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ option, handleClick }) => (
  <button onClick={handleClick}>{option}</button>
);

const Statistic = ({ text, option }) => (
  <div>
    {text} {option}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={increaseGood} option="good" />
      <Button handleClick={increaseNeutral} option="neutral" />
      <Button handleClick={increaseBad} option="bad" />
      <Header text="statistics" />
      <Statistic text="good" option={good} />
      <Statistic text="neutral" option={neutral} />
      <Statistic text="bad" option={bad} />
    </div>
  );
};

export default App;
