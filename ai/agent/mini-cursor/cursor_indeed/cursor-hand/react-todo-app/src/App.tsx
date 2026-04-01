import React, { useState, useEffect } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  editing?: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTodoItem: Todo = {
      id: Date.now().toString(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, editing: true } : todo
      )
    );
  };

  const saveEdit = (id: string, newText: string) => {
    if (newText.trim() === '') return;
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim(), editing: false } : todo
      )
    );
  };

  const cancelEdit = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, editing: false } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">✨ TodoList</h1>
          <p className="text-blue-100 italic">Organize your life, one task at a time</p>
        </header>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 border border-white/20">
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && addTodo()}
              placeholder="What needs to be done?"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <button
              onClick={addTodo}
              className="px-5 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Add
            </button>
          </div>

          <div className="mb-6 flex justify-between items-center text-white/90">
            <div className="text-sm">
              <span className="font-medium">{activeCount}</span> {activeCount === 1 ? 'task' : 'tasks'} left
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded text-sm ${filter === 'all' ? 'bg-white text-indigo-600' : 'bg-white/20'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`px-3 py-1 rounded text-sm ${filter === 'active' ? 'bg-white text-indigo-600' : 'bg-white/20'}`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1 rounded text-sm ${filter === 'completed' ? 'bg-white text-indigo-600' : 'bg-white/20'}`}
              >
                Completed
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {filteredTodos.length === 0 ? (
              <li className="text-center py-8 text-white/70 italic">
                {filter === 'all'
                  ? 'No tasks yet — add your first one!'
                  : filter === 'active'
                  ? 'All tasks are completed! 🎉'
                  : 'No completed tasks yet.'}
              </li>
            ) : (
              filteredTodos.map(todo => (
                <li
                  key={todo.id}
                  className={`bg-white/10 rounded-xl p-4 flex items-center transition-all duration-300 transform hover:scale-[1.01] ${todo.completed ? 'opacity-70' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-5 w-5 text-indigo-400 rounded focus:ring-indigo-500 mr-3 cursor-pointer"
                  />
                  {todo.editing ? (
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        defaultValue={todo.text}
                        autoFocus
                        onBlur={e => saveEdit(todo.id, e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') saveEdit(todo.id, e.target.value);
                          if (e.key === 'Escape') cancelEdit(todo.id);
                        }}
                        className="flex-1 px-3 py-1 bg-white/20 text-white rounded focus:outline-none focus:ring-1 focus:ring-white/50"
                      />
                      <button
                        onClick={() => saveEdit(todo.id, (e.target as HTMLInputElement).value)}
                        className="text-green-300 hover:text-green-100"
                      >
                        ✓
                      </button>
                      <button
                        onClick={() => cancelEdit(todo.id)}
                        className="text-red-300 hover:text-red-100"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="flex-1">
                      <span
                        className={`block ${todo.completed ? 'line-through text-gray-300' : 'text-white'}`}
                      >
                        {todo.text}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2 ml-2">
                    {!todo.editing && (
                      <button
                        onClick={() => startEditing(todo.id)}
                        className="text-blue-200 hover:text-blue-100 transition-colors"
                        aria-label="Edit"
                      >
                        ✏️
                      </button>
                    )}
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-200 hover:text-red-100 transition-colors"
                      aria-label="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>

          {todos.length > 0 && (
            <div className="mt-6 pt-4 border-t border-white/20 text-center text-white/80 text-sm">
              <p>
                {activeCount} {activeCount === 1 ? 'active' : 'active'} • {completedCount}{' '}
                {completedCount === 1 ? 'completed' : 'completed'}
              </p>
            </div>
          )}
        </div>

        <footer className="text-center text-white/70 text-sm">
          <p>Double-click to edit a task • Press Enter to save • Escape to cancel</p>
        </footer>
      </div>
    </div>
  );
};

export default App;