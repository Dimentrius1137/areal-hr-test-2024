exports.up = (pgm) => {
    pgm.createTable('history', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    changed_object: {
        type: 'varchar(50)', 
    },
    change_by_id: {
        type: 'integer', 
        notNull: true
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.addConstraint('history', 'fk_user', {
        foreignKeys: {
          columns: 'change_by_id',
          references: 'users(id)', 
          onDelete: 'cascade',
        },
      });
}

exports.down = (pgm) => {
    pgm.dropTable('history');
}





