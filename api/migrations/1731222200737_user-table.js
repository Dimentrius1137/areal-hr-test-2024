exports.up = (pgm) => {
    pgm.createTable('users', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    surname: {
        type: 'varchar(50)', 
    },
    name: {
        type: 'varchar(50)', 
    },
    patronymic: {
        type: 'varchar(50)', 
    },
    login: {
        type: 'varchar(50)', 
    },
    password: {
        type: 'varchar(50)', 
    },
    role: {
        type: 'varchar(50)', 
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
}

exports.down = (pgm) => {
    pgm.dropTable('users');
}





