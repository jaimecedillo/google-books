import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        savedBooks {
            bookId 
            authors
            description
            title
            image
            link
        }
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
        user {
            id_
            username
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
            id_
            username
            email
            savedBooks {
              bookId 
              authors
              description
              title
              image
              link
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
removeBook(bookId: $bookId) {
          id_
          username
          email
          savedBooks {
            bookId 
            authors
            description
            title
            image
            link
         }
       }
     }
`;