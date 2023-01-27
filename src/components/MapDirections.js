import { useEffect, useRef } from "react";

const MapDirections = (props) => {

    const directionsRef = useRef(null);
    let directionsRenderer;
    let directionsService;

    useEffect(() => { // trigger once on render
        loadDirectionService();
    }, []);

    const loadDirectionService = () => {

        // Init directions service
        directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsService = new window.google.maps.DirectionsService();

        let map = props.map;

        //let sidebar = document.getElementById("sidebar");
        //let rdbGroup = document.getElementById("rdbGroup");

        //map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(rdbGroup);

        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(directionsRef.current);

        // Register user click event to radio button group
        /*let rdbMRTDover = document.getElementById("rdbMRTDover");
        let rdbMRTBuonaVista = document.getElementById("rdbMRTBuonaVista");
        let rdbBus = document.getElementById("rdbBus");

        const onChangeHandler = value => {
            calculateAndDisplayRoute(directionsService, directionsRenderer, value);
        };

        rdbMRTDover.addEventListener("change", () => { onChangeHandler("Dover MRT, Singapore")});
        rdbMRTBuonaVista.addEventListener("change", () => { onChangeHandler("Buona Vista MRT, Singapore")});
        rdbBus.addEventListener("change", () => { onChangeHandler("Clementi Bus Interchange, Singapore")});*/

        props.onDirectionLoad(calculateAndDisplayRoute);
    };

    const calculateAndDisplayRoute = (value, method) => {
        if (method === "walking") {
            calculateAndDisplayRouteWalk(value);
        } else if (method === "bus") {
            calculateAndDisplayRouteBus(value);
        }
    }

    const calculateAndDisplayRouteWalk = (value) => {

        directionsService.route({
            origin: value,
            destination: "11 Kent Ridge Drive, Singapore",
            travelMode: window.google.maps.TravelMode.WALKING,
        }, result => {

            //let accordionDirections = document.getElementById("accordionDirections");
            //accordionDirections.classList.remove("d-none"); // Show for first time
            props.onDirection();

            directionsRenderer.setDirections(result);
        });
        /*.then((response) => { // This junk doesn't work
            directionsRenderer.setDirections(response);
        }).catch(event => alert("Directions request failed: " + event));*/
    }

    const calculateAndDisplayRouteBus = (value) => {

        directionsService.route({
            origin: value,
            destination: "11 Kent Ridge Drive, Singapore",
            travelMode: window.google.maps.TravelMode.TRANSIT,
        }, result => {

            props.onDirection();

            directionsRenderer.setDirections(result);
        });
    }

    return (<div id="sidebar" ref={directionsRef} className={props.className}></div>);
}

export default MapDirections;
