angular.module('LyricFinder', [])
    .controller('searchController', tController)
    .controller('playController', pController)
    .factory('mFactory', musicFactory);

tController.$inject=['$sce', 'mFactory'];
musicFactory.$inject=['$http'];

function tController($sce, mFactory){
    var tCtrl = this;
    tCtrl.$sce = $sce;

    // console.log(mFactory.name);

    tCtrl.greeting = "this is a test";

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

        }
    }

    


function pController($http){
    var pCtrl = this
}


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