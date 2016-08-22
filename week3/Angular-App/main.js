angular.module('Superheroes', []);
angular.module('Superheroes').controller('TheAvengers', avengersController);

function avengersController(){
    var avengers = this;

    avengers.title="Every team needs a captain"

    avengers.heroes=['Captain America', 'Me', 'You'];

    avengers.newAvenger="";

    function addNewHero() {
        avengers.heroes.push(avengers.newAvenger);
    }

    avengers.addNewHero=addNewHero;
    }