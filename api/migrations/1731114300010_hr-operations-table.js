exports.up = (pgm) => {
    pgm.createTable('hr_operation', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    operation_type: {
        type: 'varchar(50)', 
        notNull: true
    },
    is_fired: {
        type: 'boolean', 
    },
    salary: {
        type: 'boolean', 
    },
    employee_id: {
        type: 'integer', 
        notNull: true
    },
    department_id: {
        type: 'integer', 
        notNull: true
    },
    position_id: {
        type: 'integer', 
        notNull: true
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.addConstraint('hr_operation', 'fk_employee', {
        foreignKeys: {
          columns: 'employee_id',
          references: 'employee(id)', 
          onDelete: 'cascade',
        },
      });
    pgm.addConstraint('hr_operation', 'fk_department', {
        foreignKeys: {
          columns: 'department_id',
          references: 'department(id)', 
          onDelete: 'cascade',
        },
      });
      pgm.addConstraint('hr_operation', 'fk_position', {
        foreignKeys: {
          columns: 'position_id',
          references: 'position(id)', 
          onDelete: 'cascade',
        },
      });
}

exports.down = (pgm) => {
    pgm.dropTable('hr_operation');
}





