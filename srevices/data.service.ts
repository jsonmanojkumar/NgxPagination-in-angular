import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  filterData = [
    { id: 1, date: "2022-01-02", name: "manoj" },
    { id: 12, date: "2022-01-02", name: "manoj2" },
    { id: 2, date: "2022-01-03", name: "ram" },
    { id: 3, date: "2022-01-04", name: "shyam" },
    { id: 4, date: "2022-01-05", name: "mohit" },
    { id: 5, date: "2022-01-06", name: "sohit" },
    { id: 11, date: "2022-01-06", name: "sohit2" },
    { id: 6, date: "2022-01-07", name: "sumit" },
    { id: 7, date: "2022-01-08", name: "amit" },
    { id: 8, date: "2022-01-01", name: "rahul" },
    { id: 9, date: "2022-01-09", name: "bhola" },
    { id: 10, date: "2022-01-10", name: "aman" },
  ]

  CarsData= [
    {
      "year": "1967",
      "make": "Pontiac",
      "model": "GTO"
    },
    {
      "year": "1967",
      "make": "Pontiac",
      "model": "Firebird"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Malibu SS 396"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Camaro SS"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Camaro Z/28"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "RS"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Nova SS"
    },
    {
      "year": "1967",
      "make": "Oldsmobile",
      "model": "442"
    },
    {
      "year": "1967",
      "make": "Buick",
      "model": "Gran Sport"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Mustang GT"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Mustang GTA"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Fairlane GTA"
    },
    {
      "year": "1967",
      "make": "Shelby",
      "model": "Cobra"
    },
    {
      "year": "1967",
      "make": "Shebly",
      "model": "Mustang GT350"
    },
    {
      "year": "1967",
      "make": "Shelby",
      "model": "GT500"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "Cougar Special"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "Cyclone GT"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "427 Comet"
    },
    {
      "year": "1967",
      "make": "Pontiac",
      "model": "GTO"
    },
    {
      "year": "1967",
      "make": "Pontiac",
      "model": "Firebird"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Malibu SS 396"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Camaro SS"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Camaro Z/28"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "RS"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Nova SS"
    },
    {
      "year": "1967",
      "make": "Oldsmobile",
      "model": "442"
    },
    {
      "year": "1967",
      "make": "Buick",
      "model": "Gran Sport"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Mustang GT"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Mustang GTA"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Fairlane GTA"
    },
    {
      "year": "1967",
      "make": "Shelby",
      "model": "Cobra"
    },
    {
      "year": "1967",
      "make": "Shebly",
      "model": "Mustang GT350"
    },
    {
      "year": "1967",
      "make": "Shelby",
      "model": "GT500"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "Cougar Special"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "Cyclone GT"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "427 Comet"
    },
    {
      "year": "1967",
      "make": "Pontiac",
      "model": "GTO"
    },
    {
      "year": "1967",
      "make": "Pontiac",
      "model": "Firebird"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Malibu SS 396"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Camaro SS"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Camaro Z/28"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "RS"
    },
    {
      "year": "1967",
      "make": "Chevrolet",
      "model": "Nova SS"
    },
    {
      "year": "1967",
      "make": "Oldsmobile",
      "model": "442"
    },
    {
      "year": "1967",
      "make": "Buick",
      "model": "Gran Sport"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Mustang GT"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Mustang GTA"
    },
    {
      "year": "1967",
      "make": "Ford",
      "model": "Fairlane GTA"
    },
    {
      "year": "1967",
      "make": "Shelby",
      "model": "Cobra"
    },
    {
      "year": "1967",
      "make": "Shebly",
      "model": "Mustang GT350"
    },
    {
      "year": "1967",
      "make": "Shelby",
      "model": "GT500"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "Cougar Special"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "Cyclone GT"
    },
    {
      "year": "1967",
      "make": "Mercury",
      "model": "427 Comet"
    },
    {
      "year": "1967",
      "make": "Plymouth",
      "model": "Barracudda Formula S"
    },
    {
      "year": "1967",
      "make": "Plymouth GTX",
      "model": "GTO"
    },
    {
      "year": "1967",
      "make": "Dodge",
      "model": "Dart GT"
    },
    {
      "year": "1967",
      "make": "Dodge Dart GTS",
      "model": "GTO"
    },
    {
      "year": "1967",
      "make": "Dodge",
      "model": "Charger"
    },
    {
      "year": "1967",
      "make": "Dodge",
      "model": "Coronet R/T"
    },
    {
      "year": "1967",
      "make": "Dodge",
      "model": "Coronet 500 Hemi"
    }
  ]

}
