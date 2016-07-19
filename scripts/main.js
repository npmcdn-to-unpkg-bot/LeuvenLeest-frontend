var React = require('react');
var ReactDOM = require('react-dom');

/*
    Search bar
    <SearchBar/>
*/
var SearchBar = React.createClass({
    render : function(){
        return (
            <form className="search-bar" onSubmit="">
                <input type="text" defaultValue="Zoek of sleep de pin naar de exacte locatie" required/>
            </form>
            )
    }
});

/* ------------- PAGES ELEMENTS ------------- */

/*
    Header
    <HeadBar/>
*/
var HeadBar = React.createClass({
    render : function(){
        return(
            <div className="headbar">

                {/*<i className="lines-icon icon-plus"></i>*/}
                <p className="back-button">
                    <i className="lines-icon icon-arrow-left"></i> Back
                </p>
                <p className="title-text">Aan't Lezen</p>
                {/*<i className="lines-icon icon-list head-list"></i>*/}
                <i className="lines-icon icon-map"></i>
                {/*<i className="lines-icon icon-picture"></i>*/}
            </div>
            )
    }
})

/*
    Header when adding new place
    <HeadBar_PlaatsTV/>
*/
var HeadBar_PlaatsTV = React.createClass({
    render : function(){
        return(
            <div className="headbar-ptv">

                {/*<i className="lines-icon icon-plus"></i>*/}
                <p className="back-button">
                    <i className="lines-icon icon-arrow-left"></i> Back
                </p>
                <p className="title-text">Plaats toevoegen</p>
                {/*<i className="lines-icon icon-list head-list"></i>*/}
                {/*<i className="lines-icon icon-map"></i>*/}
                {/*<i className="lines-icon icon-picture"></i>*/}
                <p className="confirm">Aanmaken</p>
                <SearchBar/>
            </div>
            )
    }
})


/*
    Navigation bar
    <NavBar/>
*/
var NavBar = React.createClass({
    render : function(){
        return (
            <div className="navbar">
                <span className="discover-button nav-button">
                    <i className="lines-icon icon-compass" aria-hidden="true"></i>
                    <p>Ontdek</p>
                </span>
                <span className="checkin-button nav-button highlight">
                    <i className="lines-icon icon-eyeglass" aria-hidden="true"></i>
                    <p>Aan't Lezen</p>
                </span>
                <span className="profile-button nav-button">
                    <i className="lines-icon icon-map kaart-button" aria-hidden="true"></i>
                    <p>Kaart</p>
                </span>
                <span className="profile-button nav-button">
                    <i className="lines-icon icon-user profiel-button" aria-hidden="true"></i>
                    <p>Profiel</p>
                </span>
            </div>
            )
    }
})

/*
    Locations half-screen
    <Locations/>
*/
var Locations = React.createClass({
    render : function(){
        return (
            <div className="locations-list">
                <ListedLocation_CI/>
                <ListedLocation/>
                <ListedLocation/>
                <ListedLocation/>
                <ListedLocation/>
            </div>
            )
    }
})

/*
    Locations on the whole screen
    <FullLocations/>
*/
var FullLocations = React.createClass({
    render : function(){
        return (
            <div className="locations-list list-full">
                <ListedLocation_CI/>
                <ListedLocation/>
                <ListedLocation/>
                <ListedLocation/>
                <ListedLocation/>
                <ListedLocation/>
                <ListedLocation/>
            </div>
            )
    }
})

/*
    Map
    <LeuvenMap/>
*/
var LeuvenMap = React.createClass({
    render : function(){
        return (
            <div className="map-container">
                <img src="../build/css/img/map.svg" className="map"/>
            </div>
            )
    }
})

/*
    Map Small (half-screen)
    <LeuvenMapSmall/>
*/
var LeuvenMapSmall = React.createClass({
    render : function(){
        return (
            <div className="map-container-small">
                <img src="../build/css/img/map.svg" className="map"/>
            </div>
            )
    }
})

/*
    Location in list
    <ListedLocation/>
*/
var ListedLocation = React.createClass({
    render : function(){
        return (
            <div className="listed-location">
                <div className="location-text">
                    <i>Kade</i>
                    <p>Vaartkom</p>
                </div>
                <div className="checkin">
                    <div className="button-content">
                        <i className="lines-icon icon-eyeglass"></i>
                        <p>Hier aan't lezen</p>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    Checked-in location in list 
    <ListedLocation_CI/>
*/
var ListedLocation_CI = React.createClass({
    render : function(){
        return (
            <div className="listed-location">
                <div className="location-text">
                    <i>Kade</i>
                    <p>Vaartkom</p>
                </div>
                <div className="checkin ci-active">
                    <div className="button-content">
                        <i className="lines-icon icon-eyeglass"></i>
                        <p>Hier aan't lezen</p>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    "Hey *name*" block on Ontdek Page
    <WelcomeBlock/>
*/
var WelcomeBlock = React.createClass({
    render : function(){
        return (
            <div className="welcome-block">
                <img src="../build/css/img/LeuvenLeestLogo.svg" className="logo-small"/>
                <span className="profiel-button">
                    <i className="lines-icon icon-user"></i>
                </span>
                <div className="welcome-text">
                    <h2>Hey</h2>
                    <h1 className="user-name">Bruce!</h1>
                </div>
            </div>
            )
    }
})

/*
    "Hey stranger, sign in" block on Ontdek Page when not logged in
    <NLI_WelcomeBlock/>
*/
var NLI_WelcomeBlock = React.createClass({
    render : function(){
        return (
            <div className="welcome-block wb-NLI">
                <img src="../build/css/img/LeuvenLeestLogo.svg" className="logo-small"/>
                <div className="welcome-text wt-NLI">
                    <h2>Hey</h2>
                    <h1>Stranger!</h1>
                    <h3>Nice to meet you</h3>
                </div>
                <div className="ontdek-login">
                    <i className="know-eachother">Let's get to know eachother</i>
                    <div className="login-button fb-blue">
                        <i className="fa fa-facebook"></i>
                        <p>Sign in with Facebook</p>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    Profiel block (photo + name + logout)
    <ProfielBlock/>
*/
var ProfielBlock = React.createClass({
    render : function(){
        return (
            <div className="profiel-block">
                <h1>Je profiel</h1>
                <div className="profile-pic"></div>
                <h2>Bruce Wayne</h2>
                <p>bruce@wayne.com</p>
                <h3>Uitloggen</h3>
            </div>
            )
    }
})

/*
    "Add LLH to your home"
    <AddToHome/>
*/
var AddToHome = React.createClass({
    render : function(){
        return (
            <div className="add-home">
                <img src="../build/css/img/LeuvenLeest_Icon.svg" className="app-icon"/>
                <p>Tap hier om <b>LeuvenLeest</b> toe te voegen aan je homescreen</p>
                <span className="bottom-bg"></span>        
            </div>
            )
    }
})

/*
    Row of locations from Homescreen
    <LocationRow/>
*/
var LocationRow = React.createClass({
    render : function(){
        return (
            <div className="location-row">
                <div className="location-small">
                    <div className="location-text">
                        <i>Park</i>
                        <p>Grasmushof</p>
                    </div>
                </div>
                <div className="location-small">
                    <div className="location-text">
                        <i>Park</i>
                        <p>Grasmushof</p>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    Recent activity
    <Recent/>
*/
var Recent = React.createClass({
    render : function(){
        return (
            <div className="recent-act home-row">
                <h3>Recente bezocht</h3>
                <LocationRow/>
            </div>
            )
    }
})

/*
    Dichtbij
    <Dichtbij/>
*/
var Dichtbij = React.createClass({
    render : function(){
        return (
            <div className="dichtbij home-row">
                <h3>Dichtbij</h3>
                <LocationRow/>
            </div>
            )
    }
})

/*
    Dichtbij & Recent activity
    <DichtbijCo/>
*/
var DichtbijCo = React.createClass({
    render : function(){
        return (
            <div className="home-locations">
                <Recent/>
                <Dichtbij/>
            </div>
            )
    }
})

/*
    'Adres' block on location's page
    <AdresBlock/>
*/
var AdresBlock = React.createClass({
    render : function(){
        return (
            <div className="adres-block">
                <div className="adres-text">
                    <h3>Adres</h3>
                    <p>
                        Straatnaam, n°<br/>
                        Postcode Plaats
                    </p>
                </div>
                <div className="route-button">
                    <div className="route-content">
                        <i className="lines-icon icon-cursor"></i>
                        <p>Route beschrijving</p>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    'Openingsuren' block on location's page
    <Openings/>
*/
var Openings = React.createClass({
    render : function(){
        return (
            <div className="openingsuren">
                <div className="op-text">
                    <h3>Openingsuren</h3>
                    <p>
                        0:00 - 0:00<br/>
                        
                    </p>
                </div>
            </div>
            )
    }
})

/*
    Map of a specific location on said location's page
    <LocationMap/>
*/
var LocationMap = React.createClass({
    render : function(){
        return (
            <div className="detail-map">
                <LeuvenMapSmall/>
                <div className="name-n-checkin">
                    <div className="location-text">
                        <i>Type plaats</i>
                        <p>Plaatsnaam</p>
                    </div>
                    <div className="checkin">
                        <div className="button-content">
                            <i className="lines-icon icon-eyeglass"></i>
                            <p>Hier aan't lezen</p>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    Carousel for locations's pages
    <Carousel/>
*/
var Carousel = React.createClass({
    render : function(){
        return (
            <div className="carrousel">
                <input type="radio" name="slides" id="radio-1" defaultChecked/>
                <input type="radio" name="slides" id="radio-2"/>
                <input type="radio" name="slides" id="radio-3"/>
                <input type="radio" name="slides" id="radio-4"/>
                <ul className="slides">
                    <li className="slide">
                    	<p>
                        	<img src="../build/css/img/park1.jpg"/>
                    	</p>
                    </li>
                    <li className="slide">
                    	<p>
                        	<img src="../build/css/img/park2.jpg"/>
                    	</p>
                    </li>
                    <li className="slide">
                    	<p>
                        	<img src="../build/css/img/park3.jpeg"/>
                    	</p>
                    </li>
                    <li className="slide">
                    	<p>
                        	<img src="../build/css/img/park4.jpg"/>
                    	</p>
                    </li>
                </ul>
                <div className="slidesNavigation">
                    <label htmlFor="radio-1" id="dotForRadio-1"></label>
                    <label htmlFor="radio-2" id="dotForRadio-2"></label>
                    <label htmlFor="radio-3" id="dotForRadio-3"></label>
                    <label htmlFor="radio-4" id="dotForRadio-4"></label>
                </div>
            </div>
            )
    }
})

/*
    Pictures of a specific location on said location's page
    <LocationPics/>
*/
var LocationPics = React.createClass({
    render : function(){
        return (
            <div className="detail-pics">
                <Carousel/>
                <div className="name-n-checkin">
                    <div className="location-text">
                        <i>Park</i>
                        <p>Sint-Donatuspark</p>
                    </div>
                    <div className="checkin">
                        <div className="button-content">
                            <i className="lines-icon icon-eyeglass"></i>
                            <p>Hier aan't lezen</p>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
})

/*
    Details of a specific location on said location's page
    <LocationDetails/>
*/
var LocationDetails = React.createClass({
    render : function(){
        return (
            <div className="detail-infos">
                <AdresBlock/>
                <Openings/>
            </div>
            )
    }
})

/* ------------- FULL PAGES ------------- */

/*
    SplashPage
    <SplashPage/>
*/
var SplashPage = React.createClass({
    render : function(){
        return (
            <div className="splash-page">
                <img src="../build/css/img/LeuvenLeestLogo.svg" className="logo-big"/>
                <div className="start-button">
                    <div className="button-content">
                        <p>Start</p>
                        <i className="lines-icon icon-arrow-right"></i>
                    </div>
                </div>
                <AddToHome/>
            </div>
            )
    }
})

/*
    Login page
    <LoginPage/>
*/
var LoginPage = React.createClass({
    render : function(){
        return (
            <div className="login-page">
                <img src="../build/css/img/LeuvenLeestLogo.svg" className="logo-big"/>
                <div className="login-button">
                    <i className="fa fa-facebook"></i>
                    <p>Sign in with Facebook</p>
                </div>
            </div>
            )
    }
})

/*
    Home/Ontdek page when logged-in
    <OntdekPage_LI/>
*/
var OntdekPage_LI = React.createClass({
    render : function(){
        return (
            <div className="ontdek-page">
                <div className="page-content">
                    <WelcomeBlock/>
                    <DichtbijCo/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Home/Ontdek page not logged-in
    <OntdekPage_NLI/>
*/
var OntdekPage_NLI = React.createClass({
    render : function(){
        return (
            <div className="ontdek-page">
                <div className="page-content">
                    <NLI_WelcomeBlock/>
                    <div className="home-locations">
                        <Dichtbij/>
                    </div>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Full map view
    <MapView/>
*/
var MapView = React.createClass({
    render : function(){
        return (
            <div id="app">
                <HeadBar/>
                <LeuvenMap/>
                <NavBar/>
            </div>
        )
    }
})

/*
    Half Map, Half Locations
    <HalfNHalf/>
*/
var HalfNHalf = React.createClass({
    render : function(){
        return (
            <div id="app">
                <HeadBar/>
                <LeuvenMapSmall/>
                <div className="swiper">
                    <span className="swiper-center"></span>
                </div>
                <div className="page-content">
                    <Locations/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    List of locations
    <ListView/>
*/
var ListView = React.createClass({
    render : function(){
        return (
            <div id="app">
                <HeadBar/>
                <div className="page-content">
                    <FullLocations/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Profiel page
    <Profiel/>
*/
var Profiel = React.createClass({
    render : function(){
        return (
            <div id="profiel-page">
                <div id="page-content">
                    <ProfielBlock/>
                    <Recent/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Detail view (Map)
    <Detail_MapView/>
*/
var Detail_MapView = React.createClass({
    render : function(){
        return (
            <div className="detail-page">
                <HeadBar/>
                <div className="page-content">
                    <LocationMap/>
                    <LocationDetails/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Add location (Plaats toevoegen)
    <Plaats_TV/>
*/
var Plaats_TV = React.createClass({
    render : function(){
        return (
            <div className="add-place">
                <HeadBar_PlaatsTV/>
                <div className="page-content">
                    <LocationMap/>
                    <LocationDetails/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Detail view (Pictures)
    <Detail_PicView/>
*/
var Detail_PicView = React.createClass({
    render : function(){
        return (
            <div className="detail-page">
                <HeadBar/>
                <div className="page-content">
                    <LocationPics/>
                    <LocationDetails/>
                </div>
                <NavBar/>
            </div>
            )
    }
})

/*
    Success page (Added location)
    <Success_AddLoc/>
*/
var Success_AddLoc = React.createClass({
    render : function(){
        return (
            <div className="success-page">
                <i className="lines-icon icon-close"></i>
                <i className="lines-icon icon-check"></i>
                <p>Nieuwe Locatie aangemaakt</p>
                <h2>Sint-Donatuspark</h2>
            </div>
            )
    }
})

/*
    Success page (Checked In)
    <Success_CIn/>
*/
var Success_CIn = React.createClass({
    render : function(){
        return (
            <div className="success-page">
                <i className="lines-icon icon-close"></i>
                <i className="lines-icon icon-check"></i>
                <p>Aan't lezen bij</p>
                <h2>Sint-Donatuspark</h2>
            </div>
            )
    }
})

ReactDOM.render(<Plaats_TV/>, document.querySelector('#main'));