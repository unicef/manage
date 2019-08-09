
import { AppState } from './lib/reducer';
import { ReactNode, useState } from 'react';
import { Store } from 'store/root-store';
import { Dispatch, DispatchAction } from 'global-types';

import { PayloadAction, PayloadActionCreator } from 'redux-starter-kit';
// Store
export type BaseStoreShape = Store<AppState>


export interface ProviderStore {
    children: ReactNode;
}

export interface UIState {
    selectedMenuIdx: number;
}

export interface UserProfile {

    countries_available: {
        business_area_code: string;
        id: number;
        name: string;
    }[];

    country: {
        id: number;
        initial_zoom: number;
        latitude: string;
        local_currency: string;
        longitude: string;
        name: string;
    };

    email: string | null;
    first_name: string;
    last_name: string;
    job_title: string | null;
    name: string;
    user: number;
    username: string;
}

export type User = UserProfile | null;

export interface ChildrenProps {
    children: React.ReactNode;
}

export interface SuccessResponse {
    success: string;
}

export type StateSetter = ReturnType<useState>
export type ClickHandler = () => void

export type DispatchAction = PayloadAction<unknown, string> | PayloadActionCreator<void, string> | PayloadActionCreator<unknown, string> | PayloadAction<void, string>

export type Dispatch = (action: DispatchAction) => void

export type AppMiddleware = ({ getState }: {
    getState: () => Store;
}) => (dispatch: Dispatch) => (action: PayloadAction) => void

