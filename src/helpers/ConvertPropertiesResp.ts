import { Property } from "../interfaces/propertiesInterface";

export const convertPropertiesResp = (data: any) => {
    let counter = 1;
    const properties: any = [];
    const obj = {};
    Object.keys(data).forEach((key: any) => {

        Object.keys(data[key]).forEach((property: any) => {
            
            if (counter === 1) {
                properties.push({
                    id: data[key][property].id,

                    address: data[key][property].address,
                    price: data[key][property].price,
                    description: data[key][property].description,
                    image: data[key][property].image,
                    type: data[key][property].type,
                    bedrooms: data[key][property].bedrooms,
                    bathrooms: data[key][property].bathrooms,
                    area: data[key][property].area,
                    status: data[key][property].status,
                    size: data[key][property].size,
                    parking_lots: data[key][property].parking_lots,
                    lt: data[key][property].lt,
                    ln: data[key][property].ln,
                      

                });
                counter += 1;
            } else {
                properties.push({
                    id: property.id,
                    propertie_id: property.propertie_id,
                    image: property.image,
                });
                counter = 1;
            }

        }
        )
        // properties.push(property);
    }
    )
    return properties;




}


