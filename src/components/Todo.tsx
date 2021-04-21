import React from "react";
import { ITodo } from "../pages/Home";

interface ITodoProps {
  todo: ITodo;
  editing: boolean;
  setEditing: (id: number) => void;
}

interface IFormProps {
  title: string;
  content: string;
  completed: boolean;
}

interface ITodoControls {
  editing: boolean;
}

const TodoForm: React.FC<IFormProps> = ({ title, content, completed }) => {
  return (
    <form id="todo-form" className="todo-form">
      <div className="todo-form__control">
        <label htmlFor="title-input">Title:</label>
        <input
          type="text"
          name="title-input"
          placeholder={title}
          id="title-input"
        />
      </div>
      <div className="todo-form__control">
        <label htmlFor="content-input">Content:</label>
        <textarea
          id="content-input"
          name="content-input"
          className="todo-form__textarea"
          rows={5}
          cols={40}
        >
          {content}
        </textarea>
      </div>
      <div className="todo-form__control">
        Completed:{" "}
        <span>
          <div>
            <input
              type="radio"
              name="completed-input"
              id="completed-input-yes"
              value="yes"
              checked={completed}
            />
            <label htmlFor="completed-input-yes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="completed-input"
              id="completed-input-no"
              value="no"
              checked={completed}
            />
            <label htmlFor="completed-input-no">No</label>
          </div>
        </span>
      </div>
    </form>
  );
};

const TodoControls: React.FC<ITodoControls> = ({ editing }) => {
  return (
    <div className="todo-container__item-control">
      {editing ? <div>Editing</div> : <div>NotEditing</div>}
    </div>
  );
};

export const Todo: React.FC<ITodoProps> = ({ todo, editing, setEditing }) => {
  const [formData, setFormData] = React.useState({
    title: todo.title,
    content: todo.content,
    complete: todo.completed,
  });
  return (
    <li className="todo-container__list__item">
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </li>
  );
};
