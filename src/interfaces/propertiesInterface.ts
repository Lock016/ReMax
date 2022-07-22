
export interface Property {
    data: Data;
    images: Image[];
}

export interface Data {
    id: number;
    address: string;
    type: string;
    price: number;
    size: string;
    bedrooms: number;
    bathrooms: number;
    parking_lots: number;
    lt: string;
    ln: string;
    description: string;
    typeOfService: string;
    areas: string;
    images: null;
    office: number;
    link: string; 
    icon?: string;
}


export interface Image {
    id: number;
    propertie_id: number;
    image: string;
}
