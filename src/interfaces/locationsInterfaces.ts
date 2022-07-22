import { ImageProps } from "react-native";
import { Property } from './propertiesInterface';


export interface Props {
    item: Property;
    onPressElement: (item: Property) => void;
}