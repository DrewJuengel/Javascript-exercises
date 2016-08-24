angular.module("introAngular", [])
    .controller("MyController", MyController);

function MyController(){
    console.info('This is a test');

    var myController = this;

    myController.myFunction = myFunction;
    
    myController.isShowingH1 = false;

    myController.showH1 = showH1;

    function showH1(){
        myController.isShowingH1 = true;
    }
     
    function myFunction(){
        console.info("Test");
    }
}

