export const Types = {
    ADD_PRODUCT: 'cart/ADD_PRODUCT',
    REMOVE_PRODUCT: 'cart/REMOVE_PRODUCT',
    SET_QUANTITY: 'cart/SET_QUANTITY',
};

const INITIAL_STATE = {
    data: [],
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.ADD_PRODUCT: {
        const index = state.data.findIndex(
            item => item.data.id === action.payload.data.data.id,
        );

        if (index > -1) {
            return { ...state };
        }

        return { ...state, data: [...state.data, { ...action.payload.data, quantity: 1 }] };
    }
    case Types.REMOVE_PRODUCT:
        return {
            ...state,
            data: state.data.filter(item => item.data.id !== action.payload.data.data.id),
        };
    case Types.SET_QUANTITY:
        return {
            ...state,
            data: state.data.map(
                item => (item.data.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item),
            ),
        };
    default:
        return state;
    }
}

export const Creators = {
    addProduct: data => ({
        type: Types.ADD_PRODUCT,
        payload: { data },
    }),

    removeProduct: data => ({
        type: Types.REMOVE_PRODUCT,
        payload: { data },
    }),

    setQuantity: (id, quantity) => ({
        type: Types.SET_QUANTITY,
        payload: { id, quantity },
    }),
};
