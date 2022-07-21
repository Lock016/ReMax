import { Dispatch } from "redux";
import { remaxApi } from "../../api";
import { convertPropertiesResp } from "../../helpers/ConvertPropertiesResp";
import { Property } from "../../interfaces/propertiesInterface";
import { RootState } from '../store';
import { setProperties, setLoading } from "./propertiesSlice";

export const startGettingProperties = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {

            dispatch(setLoading(true));
            const { data } = await remaxApi.get<any>('/properties/')
            const properties = convertPropertiesResp(data)
            console.log(properties)
            // dispatch(setProperties(data));
            // dispatch(setLoading(false));
            // const { properties } = getState().properties;
            // console.log(properties);

        } catch (error: any) {
            console.log(error.response.detail);
        }

    }

};

