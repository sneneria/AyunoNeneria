const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql =
    'INSERT INTO "PrelimExam"."AN_lineitem"(po_id, prod_id, li_quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [2, 1, 3, 3000];

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