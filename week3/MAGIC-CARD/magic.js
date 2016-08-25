angular.module("Magic", [])
    .controller("theGathering", gatherController)
    .controller("theMagic", magicController)
    .factory("magicData", magicFactory)

function gatherController(){
    console.info("Testy test")

    var gCtrl = this

    gCtrl.Card = [{
        name: '',
        manaColor: '',
        power: '',
        toughness: '',
        art: '',
    }]

    gCtrl.addCard = function(){
        mCtrl.Card.push(mCtrl.newCard);
        mCtrl.newCard= {};
    }
}

function magicController(){
    console.info("theMagic test")

    var mCtrl = this
}

function magicFactory(){
    var factory
}

