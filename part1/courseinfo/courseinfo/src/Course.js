const Header = ({ name }) => <h2>{name}</h2>;

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const getSum = (total, part) => total + part.exercises;

const Total = ({ parts }) => {
  console.log(parts);
  return <h3>total of {parts.reduce(getSum, 0)} exercises</h3>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
