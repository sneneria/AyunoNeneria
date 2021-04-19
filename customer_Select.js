const Pool = require('./db1'); 

// use the pool's query method
Pool.query('SELECT * FROM "PrelimExam"."AN_customer"', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

// end the database connection
Pool.end();