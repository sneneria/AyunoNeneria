const Pool = require('./db1'); // load/import the pool libraries that was written on other file

const sql = 'UPDATE "PrelimExam"."AN_supplier" SET supp_name = $1, supp_address = $2 WHERE supp_id =1 RETURNING *';
const data = ['Leo James', 'Samal'];

Pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// end the database connection
Pool.end();