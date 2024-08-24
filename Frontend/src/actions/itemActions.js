import {
    fetchItems,
    createItem,
    updateItem,
    deleteItem,
} from '../api/api';

export const getItems = () => async (dispatch) => {
    try {
        const res = await fetchItems();
        dispatch({ type: 'GET_ITEMS', payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const addItem = (item) => async (dispatch) => {
    try {
        const res = await createItem(item);
        dispatch({ type: 'ADD_ITEM', payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const updateItemAction = (id, item) => async (dispatch) => {
    try {
        const res = await updateItem(id, item);
        dispatch({ type: 'UPDATE_ITEM', payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const deleteItemAction = (id) => async (dispatch) => {
    try {
        await deleteItem(id);
        dispatch({ type: 'DELETE_ITEM', payload: id });
    } catch (err) {
        console.error(err);
    }
};
