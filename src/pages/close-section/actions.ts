
import { BackendService } from 'services/backend';
import StorageService from 'services/storage';
import { ZippedEntityResults, GenericMultiSectionPayload, IndicatorsPayload, GenericSectionPayload, CloseSectionBackendPayload } from 'entities/types';
import { Dispatch } from 'global-types';
import { SectionsService } from 'services/section';
import { updateCloseSectionPayload, onFetchForCloseSuccess, onFetchFromStorageSuccess, onChangeInterventionSection, onUpdateInterventionIndicatorsState, onUpdateTravelSection, onUpdateActionPointSection, onUpdateTPMSections } from 'reducers/close-section-payload';
import { onCurrentActiveSection } from 'reducers/current-active-section';
import { onSetLoading } from 'reducers/loading';
import { onThrowError } from 'reducers/error';
import { onSetModuleEditingName } from 'reducers/module-editing-name';
import { onSuccessCloseSection } from 'reducers/closed-section-success';

export const onResetCloseSectionPayload = (dispatch: Dispatch) => {
    dispatch(updateCloseSectionPayload(null));
};

export const onFetchDataCloseSection = async (
    services: {backendService: BackendService; storageService: StorageService},
    payload: string, dispatch: Dispatch) => {

    dispatch(onCurrentActiveSection(Number(payload)));

    const { backendService, storageService } = services;

    const dataFromStorage = storageService.getStoredEntitiesData(`close_${payload}`);

    if (!dataFromStorage) {

        let dataFromServer: Partial<ZippedEntityResults>;

        dispatch(onSetLoading(true));
        try {
            dataFromServer = await backendService.getEntitiesForClose(payload);
        } catch (err) {
            dispatch(onThrowError(err.message));
            return;
        }

        dispatch(onFetchForCloseSuccess(dataFromServer));

    } else {
        dispatch(onFetchFromStorageSuccess(dataFromStorage));
    }

    dispatch(onCurrentActiveSection(Number(payload)));
};

export const onEditModuleSections = (payload: string, dispatch: Dispatch) => {
    dispatch(onSetModuleEditingName(payload));
};

export const onSelectInterventionSection = (payload: GenericMultiSectionPayload, dispatch: Dispatch) => {
    dispatch(onChangeInterventionSection(payload));
};

export const onSelectIndicatorSection = (payload: IndicatorsPayload, dispatch: Dispatch) => {
    dispatch(onUpdateInterventionIndicatorsState(payload));
};

export const onSelectTravelSection = (payload: GenericSectionPayload, dispatch: Dispatch) => {
    dispatch(onUpdateTravelSection(payload));
};

export const onSelectActionPointSection = (payload: GenericSectionPayload, dispatch: Dispatch) => {
    dispatch(onUpdateActionPointSection(payload));
};

export const onSelectTPMSections = (payload: GenericMultiSectionPayload, dispatch: Dispatch) => {
    dispatch(onUpdateTPMSections(payload));
};

export const onSubmitCloseSection = async (service: SectionsService, payload: CloseSectionBackendPayload, dispatch: Dispatch) => {
    try {
        dispatch(onSetLoading(true));
        await service.closeSection(payload);
    } catch (err) {
        dispatch(onThrowError(err.message));
        return;
    }
    dispatch(onSuccessCloseSection(true));
};