import { Dispatch } from "redux";
import { remaxApi } from "../../api";
import { convertPropertiesResp } from "../../helpers/ConvertPropertiesResp";
import { Property, Data } from '../../interfaces/propertiesInterface';
import { RootState } from '../store';
import { setProperties, setLoading } from "./propertiesSlice";



export const startGettingProperties = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {

            dispatch(setLoading(true));
            const { data } = await remaxApi.get<Property>('/properties/')

            const properties = Object.values(data).map(property => ({
                ...property.data,
                images: property.images,
            }));

            console.log(properties)

        } catch (error: any) {
            console.log(error.response.detail);
        }

    }

};

