import { Dispatch } from "redux";
import { RootState } from '../store';
import { setProperties, setLoading } from "./propertiesSlice";

export const startGettingProperties = () => {
    return async (dispatch: Dispatch, getState: ()=> RootState) => {

        const properties = [
            {
                id: '1',
                name: 'Pelicano 424 Real del Mezquital',
                location: 'cacototoa',
                price: '$100000',
                size: '1000m2',
                type: 'Casa',
                description: 'Casa color almendra con 2 portones blancos. 2 plantas. Caca',
                bedrooms: '5',
                bathrooms: '3',
                garages: '1',
                areas: 'cacotota',
                images: [
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=',
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=',
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps='
                ]
            },
            {
                id: '2',
                name: 'Pelicano 420 Real del Caca',
                location: 'algun lugar de durango',
                price: '$250000',
                size: '3000m2',
                type: 'Apartamento',
                description: 'Casa color caca con 3 portones blancos. 4 plantas. Popo',
                bedrooms: '2 1/2',
                bathrooms: '3',
                garages: '2',
                areas: 'un chorroso',
                images: [
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=',
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=',
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps='
                ]
            },
            {
                id: '3',
                name: 'Cedros 252 Paseo de los Cedros',
                location: 'bien lejos',
                price: '$350000',
                size: '2000m2',
                type: 'Casa',
                description: 'Casa color obo con 1 portones negro. 4 plantas. mojon',
                bedrooms: '3 1/2',
                bathrooms: '1',
                garages: '0',
                areas: 'un chorroso',
                images: [
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=',
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps=',
                    'https://media.istockphoto.com/vectors/vector-illustration-of-red-house-icon-vector-id155666671?k=20&m=155666671&s=612x612&w=0&h=sL5gRpVmrGcZBVu5jEjF5Ne7A4ZrBCuh5d6DpRv3mps='
                ]
            },
          ];


        try {
            
            // esperar a la api
            // dispatch(setLoading(true));
            // const response = await remaxApi.post<User>('/auth/login/', dataUser)

            dispatch(setProperties(properties));
            dispatch(setLoading(false));
            // const { properties : props} = getState().properties;
            // console.log(props);
            
        } catch (error : any) {
            console.log(error.response.detail);
        }
       
    }
  
};