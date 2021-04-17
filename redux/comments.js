import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.ADD_COMMENT:
            //console.log("New Comment:",action.payload);
            const newComment = {...action.payload, id: state.comments.length};
            const updatedComments = state.comments.concat(newComment);
            return {...state, errMess: null, comments: updatedComments};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};