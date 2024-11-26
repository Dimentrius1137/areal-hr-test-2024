exports.up = (pgm) => {
    pgm.createTable('files', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    filename: {
        type: 'varchar(100)', 
    },
    employee_id: {
        type: 'integer', 
        notNull: true
    },      
    is_deleted: {
        type: 'boolean',
        default: false
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.addConstraint('files', 'fk_employee', {
        foreignKeys: {
          columns: 'employee_id',
          references: 'employee(id)', 
          onDelete: 'cascade',
        },
      });
}

exports.down = (pgm) => {
    pgm.dropTable('files');
}





