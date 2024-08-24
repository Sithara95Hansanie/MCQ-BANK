import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, deleteItemAction } from '../actions/itemActions';
import Item from './Item';

const ItemList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.items);

    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteItemAction(id));
    };

    return (
        <div>
            <h2>Item List</h2>
            {items.map(item => (
                <Item key={item._id} item={item} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default ItemList;
