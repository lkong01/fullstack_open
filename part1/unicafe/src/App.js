import { useState } from "react";

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Button = ({ option, handleClick }) => (
  <button onClick={handleClick}>{option}</button>
);

const Statistic = ({ text, data }) => (
  <div>
    {text} {data}
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

  const getTotal = () => good + neutral + bad;
  const getAverage = () =>
    good + neutral + bad ? (good - bad) / (good + neutral + bad) : 0; //avoid divisor is 0, show NaN
  const getPositive = () =>
    good + neutral + bad ? (good / (good + neutral + bad)) * 100 : 0;

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={increaseGood} option="good" />
      <Button handleClick={increaseNeutral} option="neutral" />
      <Button handleClick={increaseBad} option="bad" />
      <Header text="statistics" />
      <Statistic text="good" data={good} />
      <Statistic text="neutral" data={neutral} />
      <Statistic text="bad" data={bad} />
      <Statistic text="all" data={getTotal()} />
      <Statistic text="average" data={getAverage()} />
      <Statistic text="positive" data={getPositive() + " %"} />
    </div>
  );
};

export default App;
