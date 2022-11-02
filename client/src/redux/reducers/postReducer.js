import { actionGetPostsBySearch } from "../actions/postAction";
import * as type from "../constants/postContant";

const initialState = [];

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_ALL: {
            return action.payload;
        }

        case type.FETCH_BY_SEARCH: {
            return action.payload;
        }

        case type.CREATE: {
            return [...state, action.payload];
        }

        case type.UPDATE:
        case type.LIKE: {
            return state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            );
        }

        case type.DELETE: {
            return state.filter((post) => post._id !== action.payload);
        }

        default: {
            return [...state];
        }
    }
};

export default postReducer;
