import { createSlice } from 'redux-starter-kit';
import { onFetchForCloseSuccess } from './close-section-payload';
import { onSuccessCloseSection } from './closed-section-success';
import { onGetSectionsSuccess } from './sections';
import { onSetMergedSection } from './merged-section';
import { onCreateSectionSuccess } from './created-section';


export const loading = createSlice({
    initialState: false,
    reducers: {
        requestStarted: () => true,
        requestComplete: () => false
    },
    extraReducers: {
        [onFetchForCloseSuccess.type]: () => false,
        [onSuccessCloseSection.type]: () => false,
        [onSetMergedSection.type]: () => false,
        [onCreateSectionSuccess.type]: () => false,
        [onGetSectionsSuccess.type]: () => false
    }
});
export const { requestStarted, requestComplete } = loading.actions;
export const { reducer: loadingReducer } = loading;
