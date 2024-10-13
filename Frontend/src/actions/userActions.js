import { createUser } from "../api/api";

export const registerUser = (user) => async (dispatch) => {
    try {

        dispatch({
            type:'USER_REGISTER_REQUEST'
        });

        const res = await createUser(user);
        console.log(res);

        localStorage.setItem('authToken', res.data.token);

        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: res.data,
            });
        // dispatch({ 
        //     type : 'ADD_USER',
        //     payload: res.data
        // })
    } catch (err) {
        dispatch({
            type:'USER_REGISTER_FAIL',
            payload:err
        });
        console.log(err)
    }
}