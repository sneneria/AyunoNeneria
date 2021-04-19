const Pool = require('./db1');

(async () => {
    const client = await Pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // customer order 3 product
        const q1 =
            'INSERT INTO "PrelimExam"."AN_lineitem"(po_id, prod_id, li_quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d1 = [1, 9, 4, 600];
        const res1 = await client.query(q1, d1);

        const q2 =
            'INSERT INTO "PrelimExam"."AN_lineitem"(po_id, prod_id, li_quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d2 = [2, 6, 1, 5000];
        const res2 = await client.query(q2, d2);

        const q3 =
            'INSERT INTO "PrelimExam"."AN_lineitem"(po_id, prod_id, li_quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d3 = [4, 10, 1, 220];
        const res3 = await client.query(q3, d3);

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