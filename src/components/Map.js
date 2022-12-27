import { useEffect, useRef } from "react";

const Map = (props) => {

    const mapRef = useRef();
    let map;

    useEffect(() => { // trigger once on render

        const googleMapScript = document.createElement('script');
        googleMapScript.src=`https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyC11494icVPw5B0RiUs0S5xFi6IpwNLVMY`;
        googleMapScript.async = true;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener('load', () => {
            loadMap();
        });

    }, []);

    const loadMap = () => {
        //let div = document.getElementById("map");
        let latLng = {lat: 1.2950436162190226, lng: 103.7746112106664};

        map = new window.google.maps.Map(mapRef.current, {
            center: latLng,
            zoom: 16,
            disableDefaultUI: true
        });

        new window.google.maps.Marker({
            position: latLng,
            map,
            title: "We are here!",
        });

        props.onMapLoad(map);
    };

    return (<div className="h-100" id="map" ref={mapRef}></div>);
}

export default Map;
