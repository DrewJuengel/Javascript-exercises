////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Restaurant Objects Part 1//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


class Food {
        constructor(strName, foodItem, numCal, vegan, glutenFree, citrusFree){
        this.strName = strName;
        this.foodItem = foodItem;
        this.numCal = numCal;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.citrusFree = citrusFree;
    }
        stringify() {
        console.log(this.strName + " is a Great " + this.foodItem + " choice. It contains " + this.numCal + "kcals. " + this.strName + " is " + this.vegan + ", " + this.glutenFree + " & " + this.citrusFree + ". " + this.strName + " is a heathly food choice for hipsters with finicky digestive systems. " );
        }
}


var food = new Food("Steak", "Dinner", "400", "Vegan Friendly", "Gluten Free", "Citrus Free")
 dish.stringify()



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////Restaurant Objects Part Douche//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

class Drink{
    constructor(drkName, drkDesc, drkPrice, fooditemIng){
    this.drkName = drkName;
    this.drkDesc = drkDesc;
    this.drkPrice = drkPrice;
    this.fooditemIng = fooditemIng;
    }
    stringify(){
        console.log();
    }
}
var drink = new Drink("Mary-Marigarita", "A delightfully intoxicating kick to the groin", "$36.01", ["Band-Aid brand Band-Aids", "Ox-Blood", "Seagram 7 Vodka, Bath Water Edition", "Fresh Mint", "Dried Tears"])
drink.stringify()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Plate{
    constructor(plateName, plateDesc, platePrice, fooditemIng){
        this.plateName = plateName;
        this.plateDesc = plateDesc;
        this.platePrice = platePrice;
        this.fooditemIng = fooditemIng;
    }
    stringify(){
        console.log();
    }
}
var plate =new Plate("Kitchen Sink", "All the things you didn't want in your meal", "1st Mortgage", ["Ox Meat", "Browner Mustard", "Day-Old French Fries", "Spit a.k.a. Colorado All-Spice", "Whole, Un-Sliced Tomatoes"])
plate.stringify()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Order{
    constructor(plate){
        this.plate = plate;
    }
}
    stringify(){
        console.log();

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Menu{
    constructor(menuPlate){
        this.menuPlate;
    }
    stringify(){
        console.log();

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Restaurant{
    constructor(resName, resDesc, resMenu){
    this.resName = resName;
    this.resDesc = resDesc;
    this.resMenu = resMenu;
    }
    stringify(){
        console.log();

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Customer{
    constructor(dietPref){
    this.dietPref=dietPref;
    }
    stringify(){
        console.log();

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
