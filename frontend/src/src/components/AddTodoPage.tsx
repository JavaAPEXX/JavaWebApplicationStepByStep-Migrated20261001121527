import React, { useState, FormEvent, ChangeEvent } from "react";

import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";

interface AddTodoForm {
  todo: string;
  category: string;
}

const AddTodoPage: React.FC = () => {
  const [form, setForm] = useState<AddTodoForm>({ todo: "", category: "" });
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setAlert(null);

    const payload = new URLSearchParams();
    payload.append("todo", form.todo);
    payload.append("category", form.category);
    payload.append("add", "Submit");

    try {
      const response = await fetch("/add-todo.do", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
        credentials: "include",
      });

      if (response.redirected) {
        window.location.href = response.url;
        return;
      }

      if (response.ok) {
        setAlert({ type: "success", message: "Todo added successfully." });
        setForm({ todo: "", category: "" });
      } else {
        const errorText = await response.text();
        setAlert({ type: "error", message: `Failed to add todo: ${errorText}` });
      }
    } catch (err) {
      setAlert({ type: "error", message: `Network error: ${(err as Error).message}` });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <Navigation />

      <div className="modern-container">
        <div className="modern-card">
          <h2>Your New Action Item:</h2>

          {alert && (
            <div className={`alert-box ${alert.type === "success" ? "alert-success" : "alert-error"}`}>
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit} method="POST" action="/add-todo.do">
            <fieldset className="form-group">
              <label htmlFor="todo" className="form-label">
                Description
              </label>
              <input
                id="todo"
                name="todo"
                type="text"
                className="form-control"
                value={form.todo}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="form-group">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                className="form-control"
                value={form.category}
                onChange={handleChange}
                required
              />
            </fieldset>

            <input
              type="submit"
              name="add"
              className="btn btn-primary"
              value={submitting ? "Submitting…" : "Submit"}
              disabled={submitting}
            />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddTodoPage;