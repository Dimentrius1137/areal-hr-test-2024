exports.up = (pgm) => {
    pgm.createTable('employee', {
        id: {
            type: 'serial',
            primaryKey: true
        },
        name: {
            type: 'varchar(50)', 
            notNull: true
        },
        surname: {
            type: 'varchar(50)', 
            notNull: true
        },
        patronymic: {
            type: 'varchar(50)', 
            notNull: true
        },
        date_of_bitrh: {
            type: 'date', 
            notNull: true
        },
        passport_series: {
            type: 'varchar(4)',
            notNull: true
        },
        passport_number: {
            type: 'varchar(6)',
            notNull: true
        },
        date_of_issue: {
            type: 'date',
            notNull: true
        },
        passport_authority_code: {
            type: 'varchar(50)',
            notNull: true
        },
        passport_issued_by: {
            type: 'varchar(50)',
            notNull: true
        },
        region: {
            type: 'varchar(50)',
            notNull: true
        },
        city: {
            type: 'varchar(50)',
            notNull: true
        },
        house: {
            type: 'varchar(30)',
            notNull: true
        },
        building: {
            type: 'varchar(30)',
        },
        apartment: {
            type: 'varchar(30)',
        },
        position_id: {
            type: 'integer',
            notNull: true
        },
        department_id: {
            type: 'integer',
            notNull: true
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    });
    pgm.addConstraint('employee', 'fk_department', {
        foreignKeys: {
          columns: 'department_id',
          references: 'department(id)', 
          onDelete: 'cascade',
        },
      });
      pgm.addConstraint('employee', 'fk_position', {
        foreignKeys: {
          columns: 'position_id',
          references: 'position(id)', 
          onDelete: 'cascade',
        },
      });
      pgm.sql(`INSERT INTO employee (name, surname, patronymic, date_of_bitrh, passport_series, passport_number, date_of_issue, passport_authority_code, passport_issued_by, region, city, house, position_id, department_id) VALUES ('Иван', 'Иванов', 'Иванович', '2000-01-01', '1488', '123123', '2014-01-02', '100-128', 'УМВД РОССИИ ПО АРХАНГЕЛЬСКОЙ ОБЛАСТИ', 'Ярославская область', 'Ярославль', '15', '6', '3')`)
}
exports.down = (pgm) => {
    pgm.dropTable('employee');
    // pgm.dropConstraint('employee', 'fk_department');
    // pgm.dropConstraint('employee', 'fk_position');
}
