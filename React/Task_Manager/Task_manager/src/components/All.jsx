function All({ tasks }) {
  return (
    <div>
      <h2>All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.title} - {task.category} - {task.completed ? "" : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default All;
