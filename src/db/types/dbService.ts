import { House } from '../../types/db/house'

export interface IDBService {
  getHouses(id: number): House | undefined
  getHouseById(price: number): Promise<House>;
}

export default IDBService;