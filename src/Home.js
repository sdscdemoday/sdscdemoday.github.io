import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import configData from "./config.json";
//import moviesJson from './movies.json';

const Home = (props) => {

    /*const ALL_GENRES = [
        {value: "horror", text: "Horror"},
        {value: "comedy", text: "Comedy"},
        {value: "action", text: "Action"},
        {value: "scifi", text: "Science Fiction"}];*/

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [defaultGenre, setDefaultGenre] = useState(localStorage.getItem("genre") || "");

    useEffect(() => {
        // Load preference
        loadGenres();
        searchMoviesByTitle("", defaultGenre);
    }, [props.idb, props.idbLoaded, defaultGenre]);

    const searchMoviesByTitle = (keyword, genre) => {

        // Save user preference
        localStorage.setItem("genre", genre);

        let idb = props.idb;
    
        if (!idb) { // Idb not initialized
            console.log("Idb not initialized.");
            return;
        }
    
        let objectStore = idb.transaction(["movies"]).objectStore("movies");
    
        let index = objectStore.index("name");
    
        let foundMovies = [];
    
        index.openCursor().onsuccess = event => {
            let cursor = event.target.result;
    
            if (cursor) {
                if(cursor.key.toLowerCase().includes(keyword.toLowerCase().trim())) {
                    //results.push(cursor.value);
                    //let data = cursor.value || "";
                    let item = cursor.value;

                    if (item?.typename?.toLowerCase().includes(genre.toLowerCase().trim())) {
                        foundMovies.push(cursor.value);
                    }
    
                }
                cursor.continue();
            } else { // No more cursor, last time
                setMovies(foundMovies);
            }
        };
    
        return false;
    }

    const loadGenres = () => {
        fetch(configData.genreURL)
        .then(response => response.json())
        .then(data => { 
            setGenres(data);
        });
    }

    const shortenParagraph = (value) => {
        const MAX_WORDS = 50;
        let words = value.split(" ");
        let shortenedWords = words.slice(0, MAX_WORDS);
        if (words.length > MAX_WORDS) {
            shortenedWords.push("...");
        }
        let shortenedValue = shortenedWords.join(" ");
        return shortenedValue;
    }

    return (
        <div className="main-content">
            <Search onSearch={searchMoviesByTitle} allGenres={genres} defaultGenre={defaultGenre} />
            <div class="text-center mb-2 text-muted">Click on speaker name for more information.</div>
            <div id="divSearch" className="row row-cols-md-2 row-cols-1 g-2">
                {
                    /* Dynamic Content */
                    movies.length > 0 ? movies.map((movie, index) => {

                        let star = movie["star"];
                        let strStars = "";
    
                        for(var i = 1; i <= 5; i++) {
                            if (i <= star) {
                                strStars += "★"; //"&#9733; "; // Filled star
                            } else {
                                strStars += "☆"; //"&#9734; "; // Hollow star
                            }
                        }

                        return (
                            <div className="col" key={index}>
                                <article className="card">
                                    <div className="card-body">
                                        <Link className="link-dark" to={"/review/" + movie["movie_id"]}>
                                            <h5 className="card-title">{movie["name"]}</h5>
                                        </Link>
                                        <h6 class="card-subtitle mb-2 text-muted">{movie["org"]}</h6>
                                        {/*<span className={star > 2 ? "text-warning" : "text-danger" + " stars"}>
                                            {strStars}
                                        </span>*/}
                                    </div>
                                    <img className="card-img" src={movie["image"]} alt={movie["name"]} />
                                    <div className="card-body">
                                        <Link className="link-dark text-decoration-none" to={"/review/" + movie["movie_id"]}>
                                            <i class="card-subtitle mb-2">Topic: {Boolean(movie["title"]?.trim()) ? movie["title"] : "TBC"}</i>
                                        </Link>
                                    </div>
                                    <div className="card-footer">
                                        <p className="card-text">
                                            {shortenParagraph(movie["description"])}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        )
                    }) : <></>
                }
            </div>
            {
                movies.length <= 0 ? <div className="col-12 mt-3 mb-3 text-center">No result found.</div> : <></>
            }
        </div>
    );
};

export default Home;
