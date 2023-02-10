import { SET_POST } from "@constants/actionsType";

const post = {post: []};
const PostReducer = (state = post, action) => {
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                ...action.payload,
            };
        default:
            break;
    }
    return state;
};
export default PostReducer;
