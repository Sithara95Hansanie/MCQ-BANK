import React from 'react';

const Item = ({ item, onDelete }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => onDelete(item._id)}>Delete</button>
            <button>Update</button>

        </div>
    );
};

export default Item;
