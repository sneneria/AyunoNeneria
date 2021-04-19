const Pool = require('./db1');

(async () => {
    const client = await Pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // bases whether customer canceled the order or not
        const isCustomerCancel = true;

        // customer order 3 product
        const q1 =
            'INSERT INTO "PrelimExam"."AN_lineitem"(po_id, prod_id, li_quantity, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const d1 = [2, 6, 1, 5000];
        const res1 = await client.query(q1, d1);

        // if customer decide to canceled, throws an error
        if (isCustomerCancel) {
            throw '\nERROR: Customer Order Canceled!!';
        }

        // COMMIT Transaction
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        console.error(e);
        console.log('Failure State: Transaction Rollback!');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));