const Pool = require('./db1');

(async () => {
    const client = await Pool.connect();

    try {
        // BEGIN Transaction
        await client.query('BEGIN');

        // INSERT 5 supplier
        const q1 = 'INSERT INTO "PrelimExam"."AN_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const d1 = ['Oliva', 'Tigato'];
        const res1 = await client.query(q1, d1);

        const q2 = 'INSERT INTO "PrelimExam"."AN_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const d2 = ['Emma', 'Buhangin'];
        const res2 = await client.query(q2, d2);

        const q3 = 'INSERT INTO "PrelimExam"."AN_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const d3 = ['Ava', 'Panabo'];
        const res3 = await client.query(q3, d3);

        const q4 = 'INSERT INTO "PrelimExam"."AN_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const d4 = ['Johnson', 'Sasa '];
        const res4 = await client.query(q4, d4);

        const q5 = 'INSERT INTO "PrelimExam"."AN_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const d5 = ['Sophia.', 'Calinan'];
        const res5 = await client.query(q5, d5);

        // Insert 5 product

        const q6 =
            'INSERT INTO "PrelimExam"."AN_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const d6 = [2, 'Laptop', 1500];
        const res6 = await client.query(q6, d6);

        const q7 =
            'INSERT INTO "PrelimExam"."AN_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const d7 = [2, 'Speaker', 500];
        const res7 = await client.query(q7, d7);

        const q8 =
            'INSERT INTO "PrelimExam"."AN_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const d8 = [2, 'Mouse', 100];
        const res8 = await client.query(q8, d8);

        const q9 =
            'INSERT INTO "PrelimExam"."AN_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const d9 = [2, 'keyboard', 150];
        const res9 = await client.query(q9, d9);

        const q10 =
            'INSERT INTO "PrelimExam"."AN_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const d10 = [2, 'mousepad', 50];
        const res10 = await client.query(q10, d10);

        // Insert 5 customer
        const q11 = 'INSERT INTO "PrelimExam"."AN_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const d11 = ['Achi', 'Panacan'];
        const res11 = await client.query(q11, d11);

        const q12 = 'INSERT INTO "PrelimExam"."AN_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const d12 = ['Kiyo', 'Buhangin'];
        const res12 = await client.query(q12, d12);

        const q13 = 'INSERT INTO "PrelimExam"."AN_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const d13 = ['Clarky', 'Panacan '];
        const res13 = await client.query(q13, d13);

        const q14 = 'INSERT INTO "PrelimExam"."AN_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const d14 = ['Mary', 'Mintal Davao'];
        const res14 = await client.query(q14, d14);

        const q15 = 'INSERT INTO "PrelimExam"."AN_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const d15 = ['Jimmy', 'Calinan'];
        const res15 = await client.query(q15, d15);

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