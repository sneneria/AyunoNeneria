const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."AN_customer" SET cust_name = $1, cust_address = $2 WHERE cust_id =4 RETURNING *';
const data = ['Maria Fuentes', 'Panacan'];

Pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
Pool.end();