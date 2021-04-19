const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."AN_lineitem" SET li_quantity = $1, li_price = $2 WHERE po_id =1 RETURNING *';
const data = [4, 1000];

Pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
Pool.end();