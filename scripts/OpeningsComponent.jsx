var React = require('react');

/*
'Openingsuren' block on location's page
<Openings/>
*/
var OpeningsComponent = React.createClass({

    render : function(){

        var openingHourOfTheDay;
        if(!this.props.place){
            console.log("the opening data is undefined")
        }else{
            var date = new Date();
            var dayNumber = date.getDay();
            var openingArray = this.props.place.openingHours;

            if(this.props.place.openingHours){
                openingHourOfTheDay = openingArray[dayNumber];
                if(openingHourOfTheDay == "")
                    openingHourOfTheDay= "We kennen de openingstijden niet";

                if(openingHourOfTheDay == "00:00 - 24:00")
                        openingHourOfTheDay= "Deze plaats is 24u per dag open";




            };
        };

        return (
            <div className="openingsuren">
            <div className="op-text">
            <h3>Openingsuren</h3>
            <p>
            <i>
            {openingHourOfTheDay}
            </i>

            <br/>

            </p>
            </div>
            </div>
            )

    }
});

export default OpeningsComponent;
