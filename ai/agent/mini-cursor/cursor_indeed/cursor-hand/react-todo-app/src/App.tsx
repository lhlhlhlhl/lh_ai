import React, { useState, useEffect } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  editing: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState<string>('');
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
      editing: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-10 mt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">✨ TodoList</h1>
          <p className="text-gray-600">Organize your tasks with style & persistence</p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button
              onClick={addTodo}
              className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Completed
            </button>
          </div>

          {filteredTodos.length === 0 ? (
            <p className="text-center text-gray-500 py-8 italic">
              {filter === 'all' ? 'No tasks yet — add one above!' : `No ${filter} tasks.`}
            </p>
          ) : (
            <ul className="space-y-3">
              {filteredTodos.map((todo) => (
                <li
                  key={todo.id}
                  className={`p-4 rounded-xl border transition-all duration-300 ${todo.completed ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100'} ${todo.editing ? 'ring-2 ring-blue-300' : ''}`}
                >
                  {todo.editing ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        defaultValue={todo.text}
                        autoFocus
                        onBlur={(e) => saveEdit(todo.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') saveEdit(todo.id, e.target.value);
                          if (e.key === 'Escape') cancelEdit(todo.id);
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => saveEdit(todo.id, (e.target as HTMLInputElement).value)}
                        className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        ✓
                      </button>
                      <button
                        onClick={() => cancelEdit(todo.id)}
                        className="px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleComplete(todo.id)}
                          className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
                        />
                        <span
                          className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                        >
                          {todo.text}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => startEditing(todo.id)}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600 flex justify-between items-center">
            <span>{activeCount} {activeCount === 1 ? 'task' : 'tasks'} left</span>
            {todos.length > 0 && (
              <button
                onClick={() => setTodos(todos.filter(todo => !todo.completed))}
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Clear completed
              </button>
            )}
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>Data persists in your browser via localStorage ✅</p>
        </footer>
      </div>
    </div>
  );
};

export default App;