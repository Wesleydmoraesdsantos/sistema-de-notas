const INITIAL_STATE = [

];

export default function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "add": 
        return [...state, action.post];
    }

    return state;
};

export const add_post = (post) => {
    return {
        type: "add",
        post
    };
};