import * as type from "../constants/authConstant";

const actionLogin = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: type.AUTH,
                data,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

const actionLogout = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: type.LOGOUT,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export { actionLogin, actionLogout };
