angular.module('magicCards',[]) 
    .controller('inputController', magicController) 
    .controller('galleryController', galleryController)
    .factory('magicFactory', cardFactory)
    
    magicController.$inject=["magicFactory"]
    galleryController.$inject=["magicFactory"]

function magicController(magicFactory) {


    var mCtrl = this; 
    mCtrl.card=magicFactory.cardList
    console.log(mCtrl.card);
    
    mCtrl.addCard = function() {
        mCtrl.card.push( mCtrl.newCard );
        mCtrl.newCard = {};
    };

}

function galleryController(magicFactory){
    
    var gCtrl = this
    gCtrl.cards=magicFactory.cardList;
}


function cardFactory(){
    cardList=[
        {
        
        name: 'Danny Devito',
        picture: 'https://i.ytimg.com/vi/yhGdt8-ao1Q/hqdefault.jpg',
        manaColor: 'red',
        power: '10',
        toughness: '10',
    },
            {
        
        name: 'Konis Hupen Guy',
        picture: 'http://www.joeydevilla.com/wordpress/wp-content/uploads/2014/10/konis-hupen.jpg',
        manaColor: 'Island',
        power: '8',
        toughness: '12',
    },
            {
        
        name: 'Bruce Campbell',
        picture: 'http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2014/12/22/bruce-campbell_612x380_0.jpg?itok=KL2k3C71',
        manaColor: 'Plains',
        power:'9999',
        toughness: '9999',
    }
    ];
    return { cardList : cardList }
}