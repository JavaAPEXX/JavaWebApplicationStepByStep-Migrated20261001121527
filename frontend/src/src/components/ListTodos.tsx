import React from 'react';

export interface Todo {
  name: string;
  category: string;
}

export interface ListTodosProps {
  /** User name to display in the welcome header */
  name: string;
  /** Array of todo items to render in the table */
  todos: Todo[];
  /** Optional error message to show in a red alert box */
  errorMessage?: string;
}

/**
 * ListTodos component renders a responsive table of todos with
 * delete actions and a link to add a new todo. The layout follows
 * the modern_css design system: .modern-container, .modern-card,
 * .modern-table-wrapper, .btn, .alert-box, etc.
 *
 * No state or form logic is included because the original JSP
 * contains no form or input elements.
 */
const ListTodos: React.FC<ListTodosProps> = ({
  name,
  todos,
  errorMessage,
}) => {
  return (
    <div className="modern-container">
      {/* Header, navigation, and footer are assumed to be separate components */}
      {/* <Header /> */}
      {/* <Navigation /> */}

      <div className="modern-card">
        <h1>Welcome {name}</h1>

        <div className="modern-table-wrapper">
          <table className="table table-striped">
            <caption>Your Todos are</caption>
            <thead>
              <tr>
                <th>Description</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, idx) => (
                <tr key={idx}>
                  <td>{todo.name}</td>
                  <td>{todo.category}</td>
                  <td>
                    <a
                      className="btn btn-danger"
                      href={`/delete-todo.do?todo=${encodeURIComponent(
                        todo.name
                      )}&category=${encodeURIComponent(todo.category)}`}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {errorMessage && (
          <div className="alert-box" style={{ color: 'red' }}>
            {errorMessage}
          </div>
        )}

        <a className="btn btn-success" href="/add-todo.do">
          Add New Todo
        </a>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ListTodos;