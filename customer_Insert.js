const Pool = require('./db1'); 

const sql = 'INSERT INTO "PrelimExam"."AN_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
const data = ['Jason Rad', 'Buhangin'];

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