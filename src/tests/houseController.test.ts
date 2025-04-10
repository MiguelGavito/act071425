import { HouseController } from "../controller/houseController";

describe('House Controller', () => {
  
  let houseController: HouseController // el let lo usamos para declarar la variable de tipo dinamica


  beforeEach(() => {
    const mockDBService = {
      getHouses: jest.fn(),
      getHouseById: jest.fn()
    }
    houseController = new HouseController(mockDBService);
  })

  test('should retun sum when the two numbers are positive', async () => {
    //given
    const num1 = 10;
    const num2 = 10;

    //when
    const result = houseController.sum(num1, num2);

    //then 
    expect(result).toBe(20)

  })

  test('should throw error when one of the numbers is negative', async () => {
    //given
    const num1 = 10;
    const num2 = -10;

    //when
    //const result = houseController.sum(num1, num2);

    //then
    expect(() => {houseController.sum(num1, num2)}).toThrow('numbers cant be negative');

  })

})