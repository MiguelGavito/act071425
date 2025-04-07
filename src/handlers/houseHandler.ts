import { HouseController } from "../controller/houseController"
import { FakeServices } from "../db/house";

export class HouseHandler {

  getHouses(){
    const ctrl = new HouseController(new FakeServices());
    const ctrl2 = new HouseController(new FakeServices(""));
  }
  
  
}