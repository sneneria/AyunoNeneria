const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."AN_product" SET prod_price = $1 WHERE prod_id =3 RETURNING *';
const data = [700];

Pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
Pool.end();