// console.log(Angular)

// angular.module("SnackAttack", []);

// angular.module("SnackAttack")
//     .controller("cookieGram", 
//     cookieGramController);

// cookieGramController.$inject = ["$scope"];
    
// function cookieGramController ($scope) {
//     $scope.greeting = "Welcome to the Snack Shack";

//     $scope.snacks = "Snickers, Butterfingers, Crispy Squirrel Bits";
// }

angular.module("SnackAttack")
    .controller("cookieGram", 
    cookieGramController);

cookieGramController.$inject = [];

function cookieGramController (){
    this.greeting = "Welcome to the Snack Shack";
    this.snacks = "Snickers, Butterfinger, Crispy Squirrel Bits";
}