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

export const EDIT_TODO = gql`
  mutation EditTodo(
    $id: ID
    $title: String
    $content: String
    $completed: Boolean
  ) {
    editTodo(id: $id, title: $title, content: $content, completed: $completed) {
      todo {
        id
        title
        content
        completed
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID) {
    deleteTodo(id: $id) {
      deleted
    }
  }
`;
