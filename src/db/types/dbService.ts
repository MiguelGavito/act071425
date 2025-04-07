import { House } from '../../types/db/house';

interface IDBService {
  getHouses(type: string, minPrice: number, maxPrice: number): Promise<House[]>;
  getHousesByPrice(price: number): Promise<House>;
}