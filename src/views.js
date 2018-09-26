import { curry } from 'ramda';
import h from 'virtual-dom/h';
import hh from 'hyperscript-helpers';

import { toggleCompleted } from './actions';

const { table, tr, td, th, div, h2, button } = hh(h);

export function view(dispatch, state) {
    const completedClimbs = state.climbs.filter(c => c.completed);
    const remainingClimbs = state.climbs.filter(c => !c.completed);
    
    return div('.container', null, [ 
        h2('.mt-3', null, 'Remaining climbs'),
        climblist(dispatch, remainingClimbs),
        h2('.mt-3', null, 'Completed climbs'),
        climblist(dispatch, completedClimbs),
    ]);
}

function climblist(dispatch, climbs) {
    return table(
        '.climblist.table',
        [
            climblistHeaderRow(),
            ...climbs.map(curry(climblistRow)(dispatch))
        ]
    );
}

function climblistHeaderRow() {
    return tr(
        '.climblist__row--header', 
        null,
        [
            th('.climblist__cell', null, 'Climb'),
            th('.climblist__cell', null, 'Elevation'),
            th('.climblist__cell', null, 'Difficulty'),
            th(),
        ],
    )
}

function climblistRow(dispatch, climb) {
    const toggleLabel = climb.completed ? 'Uncomplete' : 'Complete';
    return tr(
        '.climblist__row',
        null,
        [ 
            td('.climblist__cell', null, climb.name),
            td('.climblist__cell', null, climb.elevation),
            td('.climblist__cell', null, climb.difficulty),
            td(
                '.climblist__cell', 
                null, 
                button(
                    '.btn.btn-primary', 
                    { onclick: () => dispatch(toggleCompleted(climb.id)) },
                    toggleLabel
                )
            )
        ]
    );
}