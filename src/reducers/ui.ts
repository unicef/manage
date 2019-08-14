import { createSlice } from 'redux-starter-kit';
import { ACTION_BAR_DISABLED_ACTIONS } from 'pages/close-section/constants';

export const ui = createSlice({
    initialState: {
        selectedMenuIdx: 0,
        closeSectionActionBar: ACTION_BAR_DISABLED_ACTIONS,
        viewCloseSummary: false
    },
    reducers: {
        onSelectMenuItem: (state, action) => {
            state.selectedMenuIdx = action.payload;
        },
        setCloseSectionActionBar: (state, action) => {
            state.closeSectionActionBar = action.payload;
        },
        onSetViewCloseSummary: (state, action) => {
            state.viewCloseSummary = action.payload;

        }
    }
});
export const {
    onSelectMenuItem,
    setCloseSectionActionBar,
    onSetViewCloseSummary
} = ui.actions;
export const { reducer: uiReducer } = ui;

