angular.module('LyricFinder', [])
    .controller('searchController', tController)
    .controller('playController', pController)
    .factory('mFactory', musicFactory);

tController.$inject=['$sce', 'mFactory'];
musicFactory.$inject=['$http'];

    // START OF 1ST CONTROLLER

function tController($sce, mFactory){
    var tCtrl = this;
    tCtrl.$sce = $sce;


     function success(res) {
            tCtrl.songList = res.data; 
	        console.debug("tCtrl.songList: ",tCtrl.songList);
        }
        function error(err) {
            console.error(err);
        }

    tCtrl.getLyrics = function(){
        console.log('Getting lyrics...')
        console.log("Searching for: " + tCtrl.search);
        var result = mFactory.getSongs(tCtrl.search);
        result.then(success, error);

        // function validator() {
        //     var searchBox =  
        //     if (searchBox == null){
        //         alert("Your search is blank")
        //     }
        // } 
    }
}



    // END OF 1ST CONTROLLER

//////////////////////////////////////////////////////////////////////////////////////

    // START OF 2ND CONTROLLER

function pController($http){
    var pCtrl = this
}

    // END OF 2ND CONTROLLER

//////////////////////////////////////////////////////////////////////////////////////

    // START OF FACTORY

function musicFactory($http){

    var factoryObj = {};
   
   
        var getSongs = function(searchTerms){
           return $http({
                method: 'JSONP',
                url: 'http://api.musixmatch.com/ws/1.1/track.search',
                    params: {
                    q_lyrics: searchTerms,
                    format: 'jsonp',
                    apikey:'b13dc832af59a9d95274b3ac70b17656',
                    callback: 'JSON_CALLBACK'
                }
            });
        }
        factoryObj.getSongs = getSongs;
   
    return factoryObj;
}

// END OF FACTORY