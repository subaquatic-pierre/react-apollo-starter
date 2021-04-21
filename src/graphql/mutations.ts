import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String, $content: String, $completed: Boolean) {
    createTodo(title: $title, content: $content, completed: $completed) {
      todo {
        id
        title
        content
        completed
      }
    }
  }
`;
