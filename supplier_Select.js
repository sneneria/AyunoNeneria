const Pool = require('./db1'); // load/import the pool libraries that was written on other file

// use the pool's query method
Pool.query('SELECT * FROM "PrelimExam"."AN_supplier"', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

// end the database connection
Pool.end();