const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql = 'INSERT INTO "PrelimExam"."AN_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
const data = [3, 'Mouse Pad', 300];

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