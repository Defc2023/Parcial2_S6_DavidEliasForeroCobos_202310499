import { Flight } from "../flight/Flight";


export interface Airline {
  id: string;
  airlineName: string;
  country: string;
  city: string;
  address: string;
  identityColor: string;
  slogan: string;
  flights: Flight[];
}
