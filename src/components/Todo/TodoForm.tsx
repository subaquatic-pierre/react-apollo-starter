import React from "react";

export interface IFormProps {
  title: string;
  content: string;
  completed: boolean;
}

export const TodoForm: React.FC<IFormProps> = ({
  title,
  content,
  completed,
}) => {
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
