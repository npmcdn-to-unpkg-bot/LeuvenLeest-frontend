var React = require('react');

/*
Header
<HeadBar/>
*/
var HeadBarComponent = React.createClass({
    redirectToList : function(){
        document.location.href="/global"
    },

    redirectAdd: function(){
        document.location.href="/addPlace"
        //history.go(-1);

    },
    redirectToMap: function(){
        document.location.href="/map"
    },
    redirectBack : function(){
        history.go(-1);
    },

    render : function(){
        var currentURL = document.location.href;
        var currentURL = document.location.href;
        var splitString = currentURL.split("/");
        var endURL = splitString[splitString.length-1];
        var detailURL =splitString[splitString.length-2];
        
        return(
            <div className="headbar">
            {endURL == "map" ?
            <div id="banner">
            <p className="back-button" onClick={this.redirectBack}><i className="lines-icon icon-arrow-left" onClick={this.redirectBack}></i> Back</p>  
            <p className="title-text">Kaart</p> 
            <i className="lines-icon icon-list head-list view-icon" onClick={this.redirectToList}></i> </div> 
            :<div></div>
        }
        {endURL == "global" ? <div><i className="lines-icon icon-plus" onClick={this.redirectAdd}></i> <p className="title-text"> Aan't Lezen</p> <i className="lines-icon icon-map view-icon" onClick={this.redirectToMap}></i> </div>: <div></div> }
        {endURL == "addPlace" ?
                <div> 
                <p className="back-button" onClick={this.redirectBack}>
                    <i className="lines-icon icon-arrow-left"></i> Back
                </p>
                <p className="title-text">Plaats toevoegen</p>
                <p className="confirm" onClick={this.props.callback}>Aanmaken</p>
                {/*<SearchBarComponent />*/}
                </div> : <div></div>}

        {detailURL == "details" ? <div><p className="back-button"><i className="lines-icon icon-arrow-left" onClick={this.redirectBack}></i> Back</p>  <p className="title-text"> Details</p>  </div>: <div></div> }


            </div>
        )
    }
})


export default HeadBarComponent;
