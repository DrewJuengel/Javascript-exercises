angular.module("tokyo", [])
    .controller("abyss", abyssController)

function abyssController(){
    console.info("hey baby")

    var aCtrl = this

    aCtrl.newMonster = {};

    aCtrl.monsters = []

    aCtrl.addMonster = function(){
        aCtrl.monsters.push( aCtrl.newMonster );
        aCtrl.newMonster = {};


    }
}