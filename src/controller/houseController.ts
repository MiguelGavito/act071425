import { IDBService } from '../db/types/dbService'
//import { FakeServices } from '../db/house';
//import { House } from '../types/db/house';
export class HouseController {

  dbService: IDBService;

  constructor(dbSevice: IDBService) {
    this.dbService = dbSevice;
  }

  //async getHousesByType(type: string, minPrice: number, maxPrice: number): House[] {
  //  const houses = this.dbService.getHouses(type, minPrice, maxPrice)
  //  return houses;
  //}

  sum(num1: number, num2: number): number {
    if (num1 < 0 || num2 < 0) {
      throw new Error('numbers cant be negative')
    }
    return num1 + num2
  }
}

export default HouseController;