
import { FakeServices } from '../db/house';
import { House } from '../types/db/house';
export class HouseController {

  dbService: FakeServices;

  constructor(dbSevice: FakeServices) {
    this.dbService = dbSevice;
  }

  async getHousesByType(type: string, minPrice: number, maxPrice: number): House[] {
    const houses = this.dbService.getHouses(type, minPrice, maxPrice)
    return houses;
  }
}