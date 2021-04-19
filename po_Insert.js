const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql =
    'INSERT INTO "PrelimExam"."AN_purchasedorder"(supp_id, cust_id, po_date, po_status) VALUES ($1,$2,$3,$4) RETURNING *';
const data = [5, 5, '2021-08-09', 'Ok'];

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