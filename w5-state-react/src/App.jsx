import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [msg, setMsg] = useState("");

  const saveTodo = () => {
    const trimmedMsg = msg.trim();
    if (trimmedMsg !== "") {
      setTodo([...todo, trimmedMsg]);
      setMsg("");
    }
  };

  const delTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Homework For Afdol</h1>
      <p style={styles.subtitle}>Type the text you want.</p>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="The message you will save"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          style={styles.input}
        />
        <button onClick={saveTodo} style={styles.addButton}>
          📥 Save
        </button>
      </div>

      <ul style={styles.todoList}>
        {todo.map((item, i) => (
          <li key={i} style={styles.todoItem}>
            <span>{item}</span>
            <button onClick={() => delTodo(i)} style={styles.deleteButton}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "15px",
    background: "linear-gradient(to right, #f8f8f8, #e7f0ff)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif"
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontSize: "2.2rem",
    marginBottom: "10px"
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: "1rem",
    marginBottom: "25px"
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "border 0.3s",
  },
  addButton: {
    background: "#4CAF50",
    color: "white",
    padding: "12px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
  },
  todoItem: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "12px 15px",
    borderRadius: "8px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "transform 0.2s ease",
  },
  deleteButton: {
    background: "#ff4d4d",
    border: "none",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.3s",
  }
};

export default App;
