import GraphQLJSON from 'graphql-type-json';
import shortid from 'shortid';


export default {
  JSON: GraphQLJSON,

  Query: {
    user: (root, { id }, { db }) => db.get('users').value(),
    users: (root, args, { db }) => db.get('users').value(),
    userConnexion: (root, { name, password }, { db }) => db.get('users').value(),

    jerrys: (root, args, { db }) => db.get('jerrys').value(),
    jerryFromUser: (root, { user_id }, { db }) => db.get('jerrys').value(),

    projects: (root, args, { db }) => db.get('projects').value(),
    students: (root, args, { db }) => db.get('students').value(),
    jurists: (root, args, { db }) => db.get('jurists').value(),
  },

  Mutation: {
    addUser: (root, { input }, { pubsub, db }) => {
      const user = {
        id: shortid.generate(),
        name: input.name,
        password: input.password,
        email: input.email,
      };

      db.get('users').push(user).last().write();

      pubsub.publish('users', { userAdded: user });

      return user;
    },
    addJerry: (root, { input }, { pubsub, db }) => {
      const jerry = {
        id: shortid.generate(),
        name: input.name,
        date: input.date,
        user_id: input.user_id,
      };

      db.get('jerrys').push(jerry).last().write();

      pubsub.publish('jerrys', { jerryAdded: jerry });

      return jerry;
    },
    addProject: (root, { input }, { pubsub, db }) => {
      const project = {
        id: shortid.generate(),
        name: input.name,
        weight: input.weight,
      };

      db.get('projects').push(project).last().write();

      pubsub.publish('projects', { projectAdded: project });

      return project;
    },
    addStudent: (root, { input }, { pubsub, db }) => {
      const student = {
        id: shortid.generate(),
        name: input.name,
      };

      db.get('students').push(student).last().write();

      pubsub.publish('students', { studentAdded: student });

      return student;
    },
    addJurist: (root, { input }, { pubsub, db }) => {
      const jurist = {
        id: shortid.generate(),
        name: input.name,
        email: input.email,
      };

      db.get('jurists').push(jurist).last().write();

      pubsub.publish('jurists', { juristAdded: jurist });

      return jurist;
    },
  },

  Subscription: {
    userAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('users'),
    },
    jerryAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('jerrys'),
    },
    projectAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('projects'),
    },
    studentAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('students'),
    },
    juristAdded: {
      subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('jurists'),
    },
  },
};
