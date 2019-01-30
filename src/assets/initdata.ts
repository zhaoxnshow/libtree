export class InitData {

  public static libData = [{
    "Type": 1,
    "Title": "Root Node",
    "isTreeOpen": true,
    "Uri": "404543",
    "ChildRecords": [{
      "Title": "01. Child Node",
      "Type": 1,
      "isTreeOpen": false,
      "Uri": "404543",
      "ChildRecords":[{
        "Type": 3,
        "Title": "001. Grandson Node",
        "isTreeOpen": false,
        "Uri": "404543",
      }]
    },
    {
      "Title": "02. Child Node",
      "Type": 1,
      "isTreeOpen": false,
      "Uri": "404543",
      "ChildRecords":[{
        "Type": 3,
        "Title": "002. Grandson Node",
        "isTreeOpen": false,
        "Uri": "404543",
      }]
    }]
  }]
  
  constructor(argument) {
    // code...
  }
}