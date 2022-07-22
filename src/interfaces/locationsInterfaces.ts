import { ImageProps } from "react-native";

export type Item = {
    id: string;
    latitude: number;
    longitude: number;
    color: string;
    img: ImageProps['source'];
    name: string;
    direction: string;
};

export interface Props {
    item: Item;
    onPressElement: (item: Item) => void;
}