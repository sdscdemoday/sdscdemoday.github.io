import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Program from "./Program";
import Booth from "./Booth";
import Register from "./Register";
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

    // Track Past IDB Versions
    const IDB_VERSIONS = {
      CURRENT: 7,
      JUL_10: 7,
      JUL_07: 6,
      JUN_30: 5,
      FEB_20: 4,
      FEB_15: 3,
      FEB_07: 2,
      JAN_27: 1
    };

    // Open IDB
    let request = window.indexedDB.open("movies", IDB_VERSIONS.CURRENT);

    request.onerror = event => {
        console.log("Error opening IDB.");
    };

    request.onupgradeneeded = function(event) { // New idb version avaliable

        let idb = event.target.result;

        if (event.oldVersion < 1) {
          // Version 0: Store don't exist, do nothing
        } else if (event.oldVersion < IDB_VERSIONS.CURRENT) {
          // Delete to upgrade
          idb.deleteObjectStore("movies");
        }

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
          <Route index element={<About idb={idb} idbLoaded={idbLoaded} />} />
          <Route path="about" element={<About />} />
          <Route path="speaker" element={<Home idb={idb} idbLoaded={idbLoaded} />} />
          <Route path="program" element={<Program />} />
          <Route path="booth" element={<Booth />} />
          <Route path="register" element={<Register />} />
          <Route path="venue" element={<Venue />} />
          <Route path="submit" element={<Submit />} />
          <Route path="review/:id" element={<Review idb={idb} />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
