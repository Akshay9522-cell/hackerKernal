const { Model } = require('objection');

class Task extends Model {
  static get tableName() {
    return 'tasks';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        
        modelClass: () => require('./User'),
        join: {
          from: 'tasks.userId',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = Task;
