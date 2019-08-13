import { createSlice } from 'redux-starter-kit';
import { ModuleEntities } from 'entities/types';
import { selectWithoutCurrentSection } from 'selectors/filter-sections';

const initialState: ModuleEntities = {
    interventions: {},
    travels: {},
    actionPoints: {},
    tpmActivities: {}
};

export const closeSectionPayload = createSlice({
    initialState,
    reducers: {
        onFetchFromStorageSuccess: (state, action) => action.payload,
        onFetchForCloseSuccess: (state, action) => action.payload, // TODO: move selectWithoutCurrentSection to caller
        updateCloseSectionPayload: (state, action) => action.payload,
        onChangeInterventionSection: (state, action) => {
            const { id, sections } = action.payload;
            state.interventions[id].sections = sections;
        },
        onUpdateInterventionIndicatorsState: (state, action) => {
            const { indicators, id } = action.payload;
            (state).interventions[id].indicators = indicators;
        },
        onUpdateTravelSection: (state, action) => {
            const { section, id } = action.payload;
            state.travels[id].section = section;
        },
        onUpdateActionPointSection: (state, action) => {
            const { section, id } = action.payload;
            state.actionPoints[id].section = section;
        },
        onUpdateTPMSections: (state, action) => {
            const { sections, id } = action.payload;
            state.tpmActivities[id].sections = sections;
        }
    }
});

export const {
    onFetchFromStorageSuccess,
    updateCloseSectionPayload,
    onFetchForCloseSuccess,
    onUpdateTravelSection,
    onChangeInterventionSection,
    onUpdateActionPointSection,
    onUpdateTPMSections,
    onUpdateInterventionIndicatorsState
} = closeSectionPayload.actions;

export const { reducer: closeSectionPayloadReducer } = closeSectionPayload;