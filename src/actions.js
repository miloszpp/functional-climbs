export const TOGGLE_COMPLETED_ACTION = 'TOGGLE_COMPLETED_ACTION';

export function toggleCompleted(climbId) {
    return {
        type: TOGGLE_COMPLETED_ACTION,
        payload: climbId
    };
}