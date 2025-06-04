import { Trash2 } from 'lucide-react';
function YourTask(props) {
  if (props.tasks.length === 0) {
      return (
      <div className="text-center py-8 text-gray-500 bg-white-50 p-6 rounded-lg border border-gray-300 ">
        <p>No tasks found. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Tasks</h2>
      {props.tasks.map(function (task) {
        return (
          <div 
          key={task.id}
           className={`flex items-center justify-between p-4 border rounded-lg transition-colors duration-200 ${
            task.completed 
              ? 'bg-green-50 border-green-200' 
              : 'bg-white border-gray-200 hover:border-gray-300'
          }`}
          >
             <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={function () { props.onToggleTask(task.id); }}
                className="w-4 h-4 text-black-600 rounded focus:ring-black-500"
              />
               <span
              className={`flex-1 ${
                task.completed 
                  ? 'text-gray-500 line-through' 
                  : 'text-gray-800'
              }`}
            >
              {task.title}
            </span>
            </div>
            <div className="flex items-center gap-3">
              <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                task.category === 'Work'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {task.category}
            </span>
              <button onClick={function () { props.onDeleteTask(task.id); }}
              className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1"
              >
               <Trash2 size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default YourTask;