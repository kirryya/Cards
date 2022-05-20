
const initialState: Array<string> = []

type InitialStateType = typeof initialState

export const profileReduser = (state: InitialStateType = initialState, action: ActionType): any => {
    switch (action.type) {
        default:
            return state
    }
}

type ActionType = any
