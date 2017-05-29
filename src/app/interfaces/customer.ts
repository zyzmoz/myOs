import { City } from './city';

export interface Customer {
    id?: string,
    name: string,
    id_number: string,
    gv_number: string,
    birth_date: string,
    address: string,
    zipcode: string,
    city: City,
    complement: string,
    phone: number,
    mobile: number
    acitve: boolean    
}
