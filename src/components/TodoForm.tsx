import React from "react";

export interface IForm {
  title: string;
  content: string;
  completed: boolean;
}

export interface IFormProps {
  formData: IForm;
  handleSetFormData: (formData: IForm) => void;
}

export const TodoForm: React.FC<IFormProps> = ({
  formData: { title, content, completed },
  handleSetFormData,
}) => {
  const handleFormChange = (event: any) => {
    switch (event.target.name) {
      case "title":
        handleSetFormData({
          title: event.target.value,
          content: content,
          completed: completed,
        } as IForm);
        break;

      case "content":
        handleSetFormData({
          title: title,
          content: event.target.value,
          completed: completed,
        } as IForm);
        break;

      case "completed":
        handleSetFormData({
          title: title,
          content: content,
          completed: event.target.value === "Yes" ? true : false,
        } as IForm);
        break;

      default:
        console.log("Event name not found", event);
        break;
    }
  };
  return (
    <form id="todo-form" className="todo-form">
      <div className="todo-form__control">
        <label htmlFor="title-input">Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleFormChange}
          id="title-input"
        />
      </div>
      <div className="todo-form__control">
        <label htmlFor="content-input">Content:</label>
        <textarea
          id="content-input"
          name="content"
          className="todo-form__textarea"
          rows={5}
          cols={40}
          onChange={handleFormChange}
          value={content}
        ></textarea>
      </div>
      <div className="todo-form__control">
        Completed:{" "}
        <span>
          <div>
            <input
              type="radio"
              name="completed"
              id="completed-input-yes"
              value="Yes"
              onChange={handleFormChange}
              defaultChecked={completed}
            />
            <label htmlFor="completed-input-yes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              name="completed"
              id="completed-input-no"
              value="No"
              onChange={handleFormChange}
              defaultChecked={!completed}
            />
            <label htmlFor="completed-input-no">No</label>
          </div>
        </span>
      </div>
    </form>
  );
};
