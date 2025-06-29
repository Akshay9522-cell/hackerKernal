const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      tasks: {
        relation: Model.HasManyRelation,
        modelClass: () => require('./Task'),
        join: {
          from: 'users.id',
          to: 'tasks.userId',
        },
      },
    };
  }
}

module.exports = User;
