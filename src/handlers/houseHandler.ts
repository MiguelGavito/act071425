import { HouseController } from "../controller/houseController"
import { FakeServices } from "../db/house";
import express, { Request, Response } from "express";

export class HouseHandler {
  houseController: HouseController;
  constructor(houseController: HouseController) {
    this.houseController = houseController;
  }
  async getHouses(request: Request, response: Response){
    try{
      const houses = this.houseController.getHousesByType("sell", 0, 100);
      response.json(houses);
    } catch (error) {
      response.status(500).json({ error: 'an error'});
    }
    const ctrl = new HouseController(new FakeServices());
    const ctrl2 = new HouseController(new FakeServices(""));
  }
  
  
}