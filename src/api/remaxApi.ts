import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const remaxApi = axios.create({ baseURL: 'https://remaxbackend.herokuapp.com/api' });

remaxApi.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default remaxApi;