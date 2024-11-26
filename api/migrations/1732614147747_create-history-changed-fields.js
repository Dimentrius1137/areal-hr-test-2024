exports.up = (pgm) => {
    pgm.createTable('history_change_fields', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    field_name: {
        type: 'varchar(50)', 
    },
    last_value: {
        type: 'text', 
    },
    new_value: {
        type: 'text', 
    },
    history_id: {
        type: 'integer', 
        notNull: true
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.addConstraint('history_change_fields', 'fk_history', {
        foreignKeys: {
          columns: 'history_id',
          references: 'history(id)', 
          onDelete: 'cascade',
        },
      });
}

exports.down = (pgm) => {
    pgm.dropTable('history_change_fields');
}





