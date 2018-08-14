export const Types = {
    GET_REQUEST: 'products/GET_REQUEST',
    GET_SUCCESS: 'products/GET_SUCCESS',
};

const INITIAL_STATE = {
    data: [],
    loading: false,
};

export default function products(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.GET_REQUEST:
        return { ...state, data: [], loading: true };
    case Types.GET_SUCCESS:
        return { data: action.payload.data, loading: false };
    default:
        return state;
    }
}

export const Creators = {
    getProductsRequest: categoryId => ({
        type: Types.GET_REQUEST,
        payload: { categoryId },
    }),

    getProductsSuccess: data => ({
        type: Types.GET_SUCCESS,
        payload: { data },
    }),
};
