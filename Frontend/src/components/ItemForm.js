import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, updateItemAction } from '../actions/itemActions';

const ItemForm = ({ currentItem, setCurrentItem }) => {
    const [name, setName] = useState(currentItem ? currentItem.name : '');
    const [quantity, setQuantity] = useState(currentItem ? currentItem.quantity : '');
    const [price, setPrice] = useState(currentItem ? currentItem.price : '');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = { name, quantity, price };

        if (currentItem) {
            dispatch(updateItemAction(currentItem._id, newItem));
            setCurrentItem(null);
        } else {
            dispatch(addItem(newItem));
        }

        setName('');
        setQuantity('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">
                {currentItem ? 'Update Item' : 'Add Item'}
            </button>
        </form>
    );
};

export default ItemForm;
