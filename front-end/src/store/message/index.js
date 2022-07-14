const INITIAL_STATE = {
    showMessage: false
};

export default function reducerMessage (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'active':
            return {...state, showMessage: true};
        case 'disable':
            return {...state, showMessage: false};
    };

    return state;
};

export const activeMessage = () => {
    return { type: 'active' };
};

export const disableMessage = () => {
    return { type: 'disable' };
};