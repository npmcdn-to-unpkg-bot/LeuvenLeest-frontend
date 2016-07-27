var React = require('react');
var HeadBarComponent  = require('./HeadBarComponent.jsx');
var LocationMapComponent = require('./LocationMapComponent.jsx');
var LocationDetailsComponent = require('./LocationDetailsComponent.jsx');
var NavbarComponent = require('./NavbarComponent.jsx');

import { browserHistory } from 'react-router';
/*
Detail view (Map)
<Detail_MapView/>
*/
var Detail_MapViewComponent = React.createClass({

   getInitialState: function() {
    return {
        place : {},
    };
},

/*Callback function that will be trigger when a location is available */
handleCoordinate : function(position) {
    var msg = "Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude;
    console.log(msg);


    var coordinate =  {
        lat : position.coords.latitude,
        long : position.coords.longitude
    };

    return coordinate;
},

getCoordinate : function(){
    if(navigator.geolocation){
        return navigator.geolocation.getCurrentPosition(this.handleCoordinate);
    }else{
        console.log("Sorry the location is not available");
    }
},


componentWillMount:function(){
    var self = this;
    var currentURL = document.location.href;
    var splitString = currentURL.split("/");
    var idPlace = splitString[splitString.length-1];
    var geolocation = this.getCoordinate();

    var settings = {
          "async": true,
          "crossDomain": true,
                  "url": "http://95.85.15.210/places/"+idPlace, //+userLocation.lat+"/"+userLocation.lon,
                  "method": "GET",
                   "headers": {
                        "Authorization": sessionStorage.getItem('oAuth_token'),
                        "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",

                },
                "processData": false,
                 "contentType": false,
                 "mimeType": "multipart/form-data"
               };


             $.ajax(settings).done(function (response) {
                if (response.oAuth_token) {
                    sessionStorage.setItem('oAuth_token', response.oAuth_token);
                }
                var place = JSON.parse(JSON.parse(response).data);
                self.setState({place : place});
            });
        },

        render : function(){
            return (
                <div className="detail-page">
                <HeadBarComponent />
                <div className="page-content">
                <LocationMapComponent data={this.state.place}/>
                <LocationDetailsComponent data={this.state.place}/>
                </div>
                <NavbarComponent />
            </div>
            )
    }
})

export default Detail_MapViewComponent;
