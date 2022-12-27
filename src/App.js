import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Venue from "./Venue";
import Submit from "./Submit";
import Review from "./Review";
import logo from './logo.svg';
import configData from './config.json';
import './App.css';

//let idb;

function App() {

  const [idb, setIdb] = useState(null);
  const [idbLoaded, setIdbLoaded] = useState(false);

  useEffect(() => {

    if (!window.indexedDB) {
        console.log("IndexedDB not supported by browser!");
        return;
    }

    // Open IDB
    let request = window.indexedDB.open("movies", 1);

    request.onerror = event => {
        console.log("Error opening IDB.");
    };

    request.onupgradeneeded = function(event) { // New idb version avaliable

        let idb = event.target.result;

        // Create object store
        let store = idb.createObjectStore("movies", {keyPath: "movie_id"});

        // Create index using name and id field
        store.createIndex("name", "name", {unique: false});

        event.target.transaction.oncomplete = () => {
          setIdb(idb);
        };
    }

    request.onsuccess = event => {
        let idb = event.target.result;
        setIdb(idb);

        // Make request to json resource
        fetch(configData.movieURL)
            .then(response => response.json())
            .then(data => { 

                console.log("Fetch completed:");
                console.log(data);

                // Create idb transaction to populate json
                let transaction = idb.transaction(["movies"], "readwrite");

                transaction.oncomplete = event => { // No error
                    console.log("Populate idb success.");
                    setIdbLoaded(true);
                    //searchMoviesByTitle("");
                }
          
                transaction.onerror = event => {
                    console.log("Error populating idb from fetch.");
                }
          
                let objectStore = transaction.objectStore("movies");
                
                // Populate objects into idb store
                data.forEach(object => objectStore.put(object));
          
            }).catch(error => {
                console.log("Fetch movie error: " + error);
            });

      };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home idb={idb} idbLoaded={idbLoaded} />} />
          <Route path="about" element={<About />} />
          <Route path="venue" element={<Venue />} />
          <Route path="submit" element={<Submit />} />
          <Route path="review/:id" element={<Review idb={idb} />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
