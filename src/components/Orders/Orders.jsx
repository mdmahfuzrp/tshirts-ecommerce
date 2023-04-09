import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const tshirts = useLoaderData();
    console.log(tshirts);
    return (
        <div>
            <h1>Total T-shirt: {tshirts.length}</h1>
        </div>
    );
};

export default Orders;