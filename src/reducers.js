import { TOGGLE_COMPLETED_ACTION } from './actions';

export const initialState = {
    climbs: [
        {
            id: 1,
            name: 'Mount Blanc',
            elevation: 4808,
            difficulty: 'medium',
            completed: false
        },
        {
            id: 2,
            name: 'Matterhorn',
            elevation: 4478,
            difficulty: 'hard',
            completed: false
        }
    ]
};

export function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_COMPLETED_ACTION:
            return { 
                ...state, 
                climbs: state.climbs.map(c => c.id === action.payload ? { ...c, completed: !c.completed } : c)
            };
        default:
            return state;
    }
}