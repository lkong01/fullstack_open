const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => <h1>{props.course}</h1>;

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    );
  };

  const Content = () => {
    return (
      <div>
        <Part />
        <Part />
        <Part />
      </div>
    );
  };

  const Total = () => {
    // return <p>Number of exercises {props.exercises1 + exercises2 + exercises3}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
