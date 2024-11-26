exports.up = (pgm) => {
    pgm.createTable('position', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    title: {
        type: 'varchar(50)', 
        notNull: true
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.sql(`INSERT INTO position (title) VALUES ('РУ'), ('ЗРУ'), ('супервайзер'), ('администратор'), ('И. О. Администратора'), ('специалист ОПП'), ('кассир'), ('продавец Д')`);
}

exports.down = (pgm) => {
    pgm.dropTable('position');
}





