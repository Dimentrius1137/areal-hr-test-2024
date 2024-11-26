

exports.up = (pgm) => {
    pgm.addColumn('organization', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('department', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('position', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('employee', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('hr_operation', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('users', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('history', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
    pgm.addColumn('history_change_fields', {
        is_deleted: {
            type: 'boolean',
            default: false
        }
    })
};

exports.down = (pgm) => {
    pgm.dropColumn('organization', 'is_deleted')
    pgm.dropColumn('department', 'is_deleted')
    pgm.dropColumn('position', 'is_deleted')
    pgm.dropColumn('employee', 'is_deleted')
    pgm.dropColumn('hr_operation', 'is_deleted')
    pgm.dropColumn('users', 'is_deleted')
    pgm.dropColumn('history', 'is_deleted')
    pgm.dropColumn('history_change_fields', 'is_deleted')
};
