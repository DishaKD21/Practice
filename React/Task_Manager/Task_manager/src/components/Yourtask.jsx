function YourTask(props) {
  if (props.tasks.length === 0) {
    return <p>No tasks found. Add some tasks to get started!</p>;
  }

  return (
    <div>
      <h2>Your Tasks</h2>
      {props.tasks.map(function (task) {
        return (
          <div key={task.id}>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={function () { props.onToggleTask(task.id); }}
              />
              <span>
                {task.completed ? <s>{task.title}</s> : task.title}
              </span>
            </div>
            <div>
              <span>{task.category}</span>
              <button onClick={function () { props.onDeleteTask(task.id); }}>
               🗑️
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default YourTask;