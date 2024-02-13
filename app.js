import React, { useState } from 'react';

function TodoListApp() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [toggleColor, setToggleColor] = useState(false);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodoList = [...todoList];
        updatedTodoList[editIndex] = inputValue;
        setTodoList(updatedTodoList);
        setEditIndex(null);
      } else {
        setTodoList([...todoList, inputValue]);
      }
      setInputValue('');
    }
  };

  const handleEdit = (index) => {
    setInputValue(todoList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  const handleToggleColor = () => {
    setToggleColor(!toggleColor);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleToggleColor}>
        {toggleColor ? 'Disable Color' : 'Enable Color'}
      </button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            <span style={{ color: toggleColor ? 'red' : 'black' }}>
              {item}
            </span>
            <button onClick={() => handleEdit(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
