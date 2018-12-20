import gql from 'graphql-tag';

export const ALL_USERS_QUERY = gql`
    query AllUsersQuery {
        users {
            id
            name
            password
            email
        }
    }`;

export const ONE_USER_QUERY = gql`
    query OneUserQuery($id: ID!) {
        user(id: $id) {
            id
            name
            password
            email
        }
    }`;

export const USER_CONNEXION_QUERY = gql`
    query UserConnexionQuery($name: String!, $password: String!) {
        userConnexion(name: $name, password: $password) {
            id
            name
            password
            email
        }
    }`;

export const CREATE_USER_MUTATION = gql`
    fragment User on User {
        id
        name
        password
        email
    }
    
    mutation addUser ($input: UserInput!) {
        addUser (input: $input) {
            ...User
        }
    }`;

export const ALL_JERRYS_QUERY = gql`
    query AllJerrysQuery {
        jerrys {
            id
            name
            date
        }
    }`;

export const JERRY_FROM_USER_QUERY = gql`
    query JerryFromUserQuery($user_id: ID!) {
        jerryFromUser(user_id: $user_id) {
            id
            name
            date
            user_id
        }
    }`;

export const CREATE_JERRY_MUTATION = gql`
    fragment Jerry on Jerry {
        id
        name
        date
        user_id
    }

    mutation addJerry ($input: JerryInput!) {
        addJerry (input: $input) {
            ...Jerry
        }
    }`;

export const ALL_PROJECTS_QUERY = gql`
    query AllProjectsQuery {
        projects {
            id
            name
            weight
        }
    }`;

export const CREATE_PROJECT_MUTATION = gql`
    fragment Project on Project {
        id
        name
        weight
    }

    mutation addProject ($input: ProjectInput!) {
        addProject (input: $input) {
            ...Project
        }
    }`;

export const ALL_STUDENTS_QUERY = gql`
    query AllStudentsQuery {
        students {
            id
            name
        }
    }`;

export const CREATE_STUDENT_MUTATION = gql`
    fragment Student on Student {
        id
        name
    }

    mutation addStudent ($input: StudentInput!) {
        addStudent (input: $input) {
            ...Student
        }
    }`;

export const ALL_JURISTS_QUERY = gql`
    query AllJuristsQuery {
        jurists {
            id
            name
            email
        }
    }`;

export const CREATE_JURIST_MUTATION = gql`
    fragment Jurist on Jurist {
        id
        name
        email
    }

    mutation addJurist ($input: JuristInput!) {
        addJurist (input: $input) {
            ...Jurist
        }
    }`;
