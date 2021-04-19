const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql = 'DELETE FROM "PrelimExam"."AN_lineitem" WHERE po_id = $1 RETURNING*';
const data = [1];

// use the pool's query method
Pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
Pool.end();