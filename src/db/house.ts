import { House } from "../types/db/house";


const Fake_Houses = [
  {
    id: 1,
    price : 2, 
    loc : "falsa colonia",
    name : "pedros casa", 
    desc : "esta bonita", 
    score : 10,
    constructionArea : 50,
    terrainArea : 100,
    type : "venta"
  },
  {
    id: 2,
    price : 5, 
    loc : "falsa casilla",
    name : "luis casa", 
    desc : "esta fea", 
    score : 1,
    constructionArea : 50,
    terrainArea : 100,
    type : "venta"
  },
  {
    id: 3,
    price : 2, 
    loc : "las falsas",
    name : "jua casa", 
    desc : "esta alta", 
    score : 8,
    constructionArea : 50,
    terrainArea : 100,
    type : "venta"
  }
]

export class FakeServices {

  // Simulate a database service with fake data
  async getHouses(type : string, minPrice: number, maxPrice: number): Promise<House[]> {
    return Fake_Houses;
  }
  async getHousesByPrice(price: number): Promise<House> {
    return Fake_Houses[price];
  }
  
}

export default FakeServices;