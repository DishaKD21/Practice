function Fields(props) {
  function getFilterCounts() {
    return {
      all: props.tasks.length,
      pending: props.tasks.filter(function (task) { 
        return !task.completed; }).length,

      completed: props.tasks.filter(function (task) { 
        return task.completed; }).length,

      work: props.tasks.filter(function (task) { 
        return task.category === 'Work'; }).length,

      personal: props.tasks.filter(function (task) {
         return task.category === 'Personal'; }).length
    };
}
  const counts = getFilterCounts();

  const filterButtons = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'pending', label: 'Pending', count: counts.pending },
    { key: 'completed', label: 'Completed', count: counts.completed },
    { key: 'work', label: 'Work', count: counts.work },
    { key: 'personal', label: 'Personal', count: counts.personal }
  ];

  return (
    <div>
      {filterButtons.map(function(button) {
        return (
          <button
            key={button.key}
            onClick={function () { props.onFilterChange(button.key); }}
          >
            {button.label} ({button.count})
          </button>
        );
      })}
    </div>
  );
}
export default Fields;