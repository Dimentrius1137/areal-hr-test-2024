exports.up = (pgm) => {
    pgm.createTable('organization', {
    id: {
        type: 'serial',
        primaryKey: true
    },
    title: {
        type: 'varchar(50)', 
        notNull: true
    },
    comment: {
        type: 'text'
    },
    createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.sql(`INSERT INTO organization (title, comment) VALUES ('ООО Огонёк', 'розничная сеть')`)
}

exports.down = (pgm) => {
    pgm.dropTable('organization');
}


