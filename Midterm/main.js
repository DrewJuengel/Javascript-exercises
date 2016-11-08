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

    // window.tCtrl = tCtrl;

     function success(res) {
            tCtrl.songList = res.data; 
	        console.debug("tCtrl.songList: ",res.data);

                tCtrl.songList = res.data.message.body.track_list.filter(function(song){
                
                    
                    return song.track.track_spotify_id
                }).slice(0, 20)
                
        }
        function error(err) {
            console.error(err);
        }

    tCtrl.getLyrics = function(){
        console.log('Getting lyrics...');
        console.log("Searching for: " + tCtrl.search);
        var result = mFactory.getSongs(tCtrl.search);
        result.then(success, error);

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
                    callback: 'JSON_CALLBACK',
                    page_size: 50,
                }
            });
        }
        factoryObj.getSongs = getSongs;
   
    return factoryObj;
}

// END OF FACTORY