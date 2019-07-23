import { zipObj, filter, prop, flatten } from 'ramda';
import BaseService from 'services';
import { notEmpty } from 'utils/helpers';
import { InterventionEntity, TravelEntity, ActionPointEntity, TPMActivityEntity, ZippedEntityResults, IndicatorEntity, ZippedByModuleResults } from 'entities/types';

export interface BackendService {
    getIndicators(interventions: InterventionEntity[]): IndicatorEntity[];
    getTravels(query: string): Promise<TravelEntity[]>;
    getTPMActivities(query: string): Promise<TPMActivityEntity[]>;
    getActionPoints(query: string): Promise<ActionPointEntity[]>;
    getEntitiesForMerge(query: string): Promise<NonEmptyEntityResults>;
    getZippedEntities(query: string): Promise<ZippedByModuleResults>;
    getEntitiesForClose(query: string): Promise<NonEmptyModuleResults>;
}

export interface BackendResponse<T> {
    count: number;
    next: string;
    results: T[];
}

export type EntityUnion = InterventionEntity[] | TPMActivityEntity[] | ActionPointEntity[] |TravelEntity[]

export interface AllAffectedEntities {
    [key: string]: (query: string) => Promise<EntityUnion>;
}

export type NonEmptyEntityResults = Partial<ZippedEntityResults>
export type NonEmptyModuleResults = Partial<ZippedByModuleResults>
// TODO: Add type guards on all api responses
export default class BackendApiService extends BaseService implements BackendService {

    private entityApiMap: AllAffectedEntities= {
        tpmActivities: this.getTPMActivities.bind(this),
        actionPoints: this.getActionPoints.bind(this),
        interventions: this.getInterventions.bind(this),
        travels: this.getTravels.bind(this)
    }

    public async getInterventions(query: string): Promise<InterventionEntity[]> {
        try {
            const url = `${process.env.REACT_APP_INTERVENTIONS_APPLIED_INDICATORS_ENDPOINT}${query}`;
            const response = await this._http.get<InterventionEntity[]>(url);
            return response;
        } catch (err) {
            const json = JSON.parse(err.message);
            throw new Error(`An error occurred retreiving travels for the requested sections: ${query}. Response code: ${json.code}`);
        }
    }

    public getIndicators(interventions: InterventionEntity[]): IndicatorEntity[] {
        return flatten(interventions.map(prop('indicators')).filter(notEmpty));
    }

    public async getTravels(query: string): Promise<TravelEntity[]> {
        try {
            const url = `${process.env.REACT_APP_TAVELS_ENDPOINT}${query}`;
            const response = await this._http.get<BackendResponse<TravelEntity>>(url);
            return response.results;
        } catch (err) {
            const json = JSON.parse(err.message);
            throw new Error(`An error occurred retreiving travels for the requested sections: ${query}. Response code: ${json.code}`);
        }
    }

    public async getTPMActivities(query: string): Promise<TPMActivityEntity[]> {
        try {
            const url = `${process.env.REACT_APP_TPM_ACTIVITIES_ENDPOINT}${query}`;
            const response = await this._http.get<BackendResponse<TPMActivityEntity>>(url);
            return response.results;
        } catch (err) {
            const json = JSON.parse(err.message);
            throw new Error(`An error occurred retreiving travels for the requested sections: ${query}. Response code: ${json.code}`);
        }
    }

    public async getActionPoints(query: string): Promise<ActionPointEntity[]> {
        try {
            const url = `${process.env.REACT_APP_ACTION_POINTS_ENDPOINT}${query}`;
            const response = await this._http.get<BackendResponse<ActionPointEntity>>(url);
            return response.results;
        } catch (err) {
            const json = JSON.parse(err.message);
            throw new Error(`An error occurred retreiving travels for the requested sections: ${query}. Response code: ${json.code}`);
        }
    }

    public async getEntitiesForMerge(query: string): Promise<NonEmptyEntityResults> {
        const zipped = await this.getZippedEntities(query);
        const withIndicators: ZippedEntityResults = {
            ...zipped,
            indicators: this.getIndicators(zipped.interventions)
        };
        return filter(notEmpty, withIndicators);
    }

    public async getEntitiesForClose(query: string): Promise<NonEmptyModuleResults> {
        const zipped = await this.getZippedEntities(query);
        return filter(notEmpty, zipped);
    }

    public async getZippedEntities(query: string): Promise<ZippedByModuleResults> {
        const zip = zipObj(Object.keys(this.entityApiMap));
        const allEntities = await Promise.all(
            Object.keys(this.entityApiMap).map(
                entity => this.entityApiMap[entity](query)
            )
        );
        return zip(allEntities);
    }


}
