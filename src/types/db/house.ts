

//class house {
//  private price : number = 0;

//  setPrice(price : number) {
//    if (price < 2000) {
//      api.getPrices()
//      newPrice < price {
//        
//      }
//}

export interface House {
  id : number; // id de la casa
  price : number; //precio
  loc : string; // localización
  name : string; // nombre
  desc : string; // descripción
  score : number; // calificacion
  constructionArea : number; // area en metros cuadrados
  terrainArea : number;
  type : string;
}
