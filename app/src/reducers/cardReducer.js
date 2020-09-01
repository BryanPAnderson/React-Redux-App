import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE} from '../actions/actions';

export const initialState = {
    characters: [],
    error:"",
    isFetching: false
};

export function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                isFetching: true
            };
            case FETCH_CHARACTERS_SUCCESS:
                return {
                    ...state,
                    error: '',
                    isFetching: false,
                    characters: action.payload
                };
                case FETCH_CHARACTERS_FAILURE:
                    return {
                        ...state,
                        error: action.payload,
                        isFetching: false
                    };
                    default: console.log('default case') 
                    return state;
    }
}