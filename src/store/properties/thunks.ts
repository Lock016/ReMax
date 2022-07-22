import { Dispatch } from "redux";
import { remaxApi } from "../../api";
import { convertPropertiesResp } from "../../helpers/ConvertPropertiesResp";
import { Property } from '../../interfaces/propertiesInterface';
import { RootState } from '../store';
import { setProperties, setLoading } from "./propertiesSlice";

interface Props {
    propertyType: string,
    location: string,
    fromPrice: string,
    toPrice: string,
    fromSize: string,
    toSize: string,
    rooms: string,
    bathrooms: string,
    parking: string,
}

export const startGettingProperties = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {

            dispatch(setLoading(true));
            const { data } = await remaxApi.get<Property>('/properties/')
            const properties = Object.values(data).map(property => ({
                ...property.data,
                images: property.images,
            }));
            dispatch(setProperties(properties));
            dispatch(setLoading(false));
        } catch (error: any) {
            console.log(error.response.detail);
        }

    }

};
export const startFilteringProperties = ({
    propertyType,
    location,
    fromPrice='0',
    toPrice='999999999',
    fromSize='0',
    toSize='999999999',
    rooms='0',
    bathrooms='0',
    parking='0',
}: Props) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        try {
            console.log('pt',propertyType, 'l',location, 'fp',fromPrice, 'tp',toPrice, 'fs', fromSize, 'ts', toSize, 'r', rooms, 'b', bathrooms, 'p', parking);
            dispatch(setLoading(true));
            const { data } = await remaxApi.post<Property>('/properties/filter/',{
                address: location,
                type: propertyType,
                priceGTE: parseInt(fromPrice),
                priceLTE: parseInt(toPrice),
                sizeGTE: parseInt(fromSize),
                sizeLTE: parseInt(toSize),
                bedrooms: parseInt(rooms),
                bathrooms: parseFloat(bathrooms),
                parking_lots: parseInt(parking),
            })
            console.log('data', data);
            const properties = Object.values(data).map(property => ({
                ...property.data,
                images: property.images,
            }));
            dispatch(setProperties(properties));
            dispatch(setLoading(false));
        } catch (error: any) {
            console.log('error', error);
        }

    }

};

