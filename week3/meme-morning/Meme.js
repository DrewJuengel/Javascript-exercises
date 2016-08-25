angular.module("IOM", [])
    .controller("danktroller", dankController)
    .controller("keyboardCatroller", keyController);

function dankController(){
    console.info("dankMemesBaby")

    var dCtrl = this;

    dCtrl.memes = [
        {
            name: 'Xzibit',
            about: 'Repetition and Recursion',
            funniness: '2',
            picture: '',
        }
    ]

}

function keyController(){
    console.info("keyController")

    var kCtrl = this;

}