angular.module("Magic", [])
    .controller("magicForm", formController)
    .controller("theMagic", magicController)
    .factory("magicData", magicFactory)

function formController(){
    console.info("Testy test")

    var fCtrl = this

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

