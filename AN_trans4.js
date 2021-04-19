const Pool = require('./db1');

(async () => {
    const client = await Pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // customer order 3 product
        const q1 = 'UPDATE "PrelimExam"."AN_supplier" SET supp_address = $1 WHERE supp_id =7 RETURNING *';
        const d1 = ['Indangan'];
        const res1 = await client.query(q1, d1);

        // COMMIT Transaction
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));