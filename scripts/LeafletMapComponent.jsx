var React = require('react');
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

/*Map component */
var idPos = 0;
var LeafletMapComponent = React.createClass({
    getInitialState: function() {
        return {
          coordinates : {},
          places : [],
          ready : false
      };
  },

  componentWillMount : function() {
    navigator.geolocation.getCurrentPosition(function(position){
        var coordinate =  {
            lat : position.coords.latitude,
            lon : position.coords.longitude
        };
        this.setState({coordinates : coordinate});
        var settings = {
            'async' : true,
            'crossDomain': true,
            'url': 'http://95.85.15.210/places/' + this.state.coordinates.lat + '/' + this.state.coordinates.lon,
            'method': 'GET',
        };

        $.ajax(settings).done(function (response) {
            this.setState({places : response});
            this.setState({ready : true});
        }.bind(this));
    }.bind(this));
},

render: function(){
    if (this.state.ready) {
        return (
            <div className={this.props.divClass}>
            <Map center={[this.state.coordinates.lat, this.state.coordinates.lon]} zoom={15}>
            <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[this.state.coordinates.lat, this.state.coordinates.lon]}>
            <Popup>
            <span> <i>You're here</i></span>
            </Popup>
            </Marker>

            {this.state.places.map(function(object, i) {
                /*The places won't be showed if you're in the detail page*/
                if(this.props.data){
                    var pos = [object.latitude, object.longitude];
                    return (
                        <Marker key={object.id} position={pos} opacity={0.6}>
                        <Popup>
                        <span><h4>{object.name}</h4> <i> {object.address}</i>
                        <br/>
                        <a href={'/details/'+object.id}>Click for the detail</a>
                        </span>
                        </Popup>
                        </Marker>
                        );
                }else{
                 var pos = [this.props.data.latitude, this.props.data.longitude];
                 return (
                    <Marker key={object.id} position={pos} opacity={0.9} >
                    <Popup>
                    <span><h4>{this.props.data.name}</h4> <i> {this.props.data.address}</i>
                    <br/>
                    <a href={'/details/'+this.props.data.id}>Click for the detail</a>
                    </span>
                    </Popup>
                    </Marker>
                    );

             }
         }.bind(this))}
            </Map>
            </div>
            );
    }
    return null;
},

});

export default LeafletMapComponent;
