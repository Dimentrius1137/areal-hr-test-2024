exports.up = (pgm) => {
    pgm.createTable('department', {
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
        parent: {
            type: 'integer'
        },
        organization_id: {
            type: 'integer',
            notNull: true
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    });
    pgm.addConstraint('department', 'fk_organizations', {
        foreignKeys: {
          columns: 'organization_id',
          references: 'organization(id)', 
          onDelete: 'cascade',
        },
      });
    pgm.addConstraint('department', 'fk_parent', {
        foreignKeys: {
          columns: 'parent',
          references: 'department(id)', 
          onDelete: 'cascade',
        },
      });
      pgm.sql(`INSERT INTO department (title, comment, organization_id) VALUES ('офис', 'рекрутинг', 1), ('региональное начальство', 'управление', 1), ('линейный персонал', 'торговля', 1)`)
}
exports.down = (pgm) => {
    pgm.dropTable('department');
    // pgm.dropConstraint('department', 'fk_organizations');
}
