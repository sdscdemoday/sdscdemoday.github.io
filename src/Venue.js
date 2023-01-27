import { useState } from "react";
import Map from "./components/Map";
import MapDirections from "./components/MapDirections";

let defaultDirection;
let map;

const Venue = () => {

    const [hasDirection, setHasDirection] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [directionLoaded, setDirectionLoaded] = useState(false);

    const onDirectionLoad = (f) => {
        defaultDirection = f;
        setDirectionLoaded(true);
    }

    const onChangeHandler = (keyword, method) => {
        defaultDirection(keyword, method);
    }

    const onDirection = () => {
        setHasDirection(true);
    }

    const onMapLoad = (loadedMap) => {
        map = loadedMap;
        setMapLoaded(true);
    }

    return (
        <div className="container-fluid main-content">
            <div className="center mt-4">
                <h1>Event Venue</h1>
                <p>The event is hosted at Shaw Foundation Alumni House, 11 Kent Ridge Drive, Singapore 119244.</p>
                <div className="fs-5 col-10 col-md-8 mx-auto">
                    <table className="table table-borderless contact">
                        <thead className="float-start fw-bolder">
                            <tr>
                                <td>Telephone:</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                            </tr>
                        </thead>
                        <tbody className="float-end">
                            <tr>
                                <td><a className="link-dark" href="tel:+6566017820">+65 66017820</a></td>
                            </tr>
                            <tr>
                                <td>11 Kent Ridge Drive <br/> Singapore 119244</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="border border-3 shadow-lg mb-4 form-content map-container">
                <Map onMapLoad={onMapLoad} />
            </div>
            <div className="text-center mb-4">
                <p className="lead">Get Direction from Nearby</p>
                <p className="mx-2 my-2">🚶 I am walking:</p>
                { directionLoaded ?
                    <div className="btn-group" role="group" aria-label="Get Direction From" id="rdbGroup">
                        <input type="radio" className="btn-check" name="btnradio" id="rdbWalk1" onChange={() => {onChangeHandler("Kent Ridge MRT, Singapore", "walking")}} autoComplete="off"></input>
                        <label className="btn btn-outline-primary" htmlFor="rdbWalk1">Kent Ridge MRT</label>

                        <input type="radio" className="btn-check" name="btnradio" id="rdbWalk2" onChange={() => {onChangeHandler("Clementi MRT, Singapore", "walking")}} autoComplete="off"></input>
                        <label className="btn btn-outline-primary" htmlFor="rdbWalk2">Clementi MRT</label>
                    
                        <input type="radio" className="btn-check" name="btnradio" id="rdbWalk3" onChange={() => {onChangeHandler("Kent Ridge Terminal, Singapore", "walking")}} autoComplete="off"></input>
                        <label className="btn btn-outline-primary" htmlFor="rdbWalk3">Kent Ridge Bus Terminal</label>
                    </div> : <i>Loading services...</i>
                }
                <br />
                <p className="mx-2 my-2">🚌 I am traveling by bus:</p>
                { directionLoaded ?
                    <div className="btn-group" role="group" aria-label="Bus Direction From" id="rdbGroup2">
                        <input type="radio" className="btn-check" name="btnradio" id="rdbBus1" onChange={() => {onChangeHandler("Kent Ridge MRT, Singapore", "bus")}} autoComplete="off"></input>
                        <label className="btn btn-outline-primary" htmlFor="rdbBus1">Kent Ridge MRT</label>

                        <input type="radio" className="btn-check" name="btnradio" id="rdbBus2" onChange={() => {onChangeHandler("Clementi MRT, Singapore", "bus")}} autoComplete="off"></input>
                        <label className="btn btn-outline-primary" htmlFor="rdbBus2">Clementi MRT</label>
                    
                        {/*<input type="radio" className="btn-check" name="btnradio" id="rdbBus3" onChange={() => {onChangeHandler("Kent Ridge Terminal, Singapore", "bus")}} autoComplete="off"></input>
                        <label className="btn btn-outline-primary" htmlFor="rdbBus3">Kent Ridge Bus Terminal</label>*/}
                    </div> : <i>Loading services...</i>
                }
            </div>
            { mapLoaded ? /* Lifecycle: Map must be loaded before rendering directions panel */
                <div className={"text-center mb-4" + (hasDirection ? "" : " d-none")}>
                    <div className="accordion" id="accordionDirections">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="headingDirection">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                See Detailed Direction
                                </button>
                            </h4>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionDirections">
                                <MapDirections className="accordion-body" map={map} onDirectionLoad={onDirectionLoad} onDirection={onDirection} />
                            </div>
                        </div>
                    </div>
                </div> : <></>
            }
            {/*<script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyC11494icVPw5B0RiUs0S5xFi6IpwNLVMY&callback=loadMap"></script>*/}
        </div>
    );
};

export default Venue;
