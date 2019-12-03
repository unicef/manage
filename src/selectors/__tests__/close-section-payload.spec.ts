import {
    closeSectionState,
    actionPoints,
    interventions,
    tpmActivities,
    travels,
    travelsSplit
} from './fixtures/selector-state-fixtures';
import { selectActionPointsFromPayload } from '../action-points';
import { selectInterventionsFromPayload } from '../interventions';
import { selectTPMFromPayload } from '../tpm-activities';
import { selectTravelsFromPayload } from '../travels';
import { selectCurrentActiveSection } from '..';
import { selectNamesFromsplit } from '../split-section';
import { getCloseSectionBackendPayload } from '../close-section-payload';

describe('Selectors: Close section payload', () => {
    test('action points selector', () => {
        const actionPoints = closeSectionState.closeSectionPayload.actionPoints;
        expect(selectActionPointsFromPayload(closeSectionState)).toEqual(actionPoints);
    });
    test('interventions selector', () => {
        const interventions = closeSectionState.closeSectionPayload.interventions;
        expect(selectInterventionsFromPayload(closeSectionState)).toEqual(interventions);
    });
    test('tpm selector', () => {
        const tpm = closeSectionState.closeSectionPayload.tpmActivities;
        expect(selectTPMFromPayload(closeSectionState)).toEqual(tpm);
    });
    test('travels selector', () => {
        const travels = closeSectionState.closeSectionPayload.travels;
        expect(selectTravelsFromPayload(closeSectionState)).toEqual(travels);
    });

    test('current active section selector', () => {
        const currentSection = closeSectionState.currentActiveSectionId;
        expect(selectCurrentActiveSection(closeSectionState)).toEqual(currentSection);
    });

    test('section names from split selector', () => {
        const names = ['Health', 'Education'];
        const state = {
            ...closeSectionState,
            sectionsFromSplit: [
                { name: 'Health', active: true },
                { name: 'Education', active: true }
            ]
        };
        expect(selectNamesFromsplit(state)).toEqual(names);
    });

    test('closing section - creates correct shape of backend payload for POST request', () => {
        expect(
            getCloseSectionBackendPayload.resultFunc(
                actionPoints,
                interventions,
                tpmActivities,
                travels,
                4,
                []
            )
        ).toEqual({
            new_sections: {
                'Basic needs': {
                    interventions: [1]
                },
                Education: {
                    interventions: [2]
                },
                Health: {
                    applied_indicators: [770],
                    interventions: [2]
                },
                Humanitarian: {
                    action_points: [37]
                },
                ICT: {
                    action_points: [39]
                },
                Nutrition: {
                    tpm_activities: [25]
                },
                'Social Policy': {
                    travels: [5, 6]
                },
                Operations: {
                    tpm_activities: [26]
                }
            },
            old_section: 4
        });
    });

    test('split section - creates correct shape of backend payload for POST request', () => {
        expect(
            getCloseSectionBackendPayload.resultFunc(
                actionPoints,
                interventions,
                tpmActivities,
                travelsSplit,
                4,
                ['Split_1', 'Split_2']
            )
        ).toEqual({
            new_sections: {
                'Basic needs': {
                    interventions: [1]
                },
                Education: {
                    interventions: [2],
                    travels: [6]
                },
                Health: {
                    applied_indicators: [770],
                    interventions: [2]
                },
                Humanitarian: {
                    action_points: [37]
                },
                ICT: {
                    action_points: [39]
                },
                Nutrition: {
                    tpm_activities: [25]
                },
                Split_1: {
                    travels: [5]
                },
                Split_2: {},
                Operations: {
                    tpm_activities: [26]
                }
            },
            old_section: 4
        });
    });
});