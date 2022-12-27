import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Comment from "./components/Comment";

const Review = (props) => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        let numID = Number(id);
        getMoviesById(numID);
    }, [props]);

    const getMoviesById = (id) => {

        //let txtFilm = document.querySelector("#txtFilm");
    
        //let keyword = txtFilm.value;

        let idb = props.idb;
    
        if (!idb) { // Idb not initialized
            console.log("Idb not initialized.");
            return;
        }
    
        let objectStore = idb.transaction(["movies"]).objectStore("movies");
    
        let request = objectStore.get(id);

        request.onsuccess = () => {
            let movie = request.result;
            console.log(movie);
            setMovie(movie);
        }
    }

    const renderStars = (stars) => {
        let strStars = "";

        for(var i = 1; i <= 5; i++) {
            if (i <= stars) {
                strStars += "★"; //"&#9733; "; // Filled star
            } else {
                strStars += "☆"; //"&#9734; "; // Hollow star
            }
        }
        return strStars;
    }

    return (
        movie &&
        <div className="container-fluid main-content">
            <div className="mt-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="link-dark" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Review</li>
                    </ol>
                    </nav>
            </div>
            <article className="shadow-sm review px-4 pb-3">
                <h1>{movie["name"]}</h1>
                <span className={"fs-4 stars " + (Number(movie["star"]) > 2 ? "text-warning" : "text-danger")}>
                    {renderStars(movie["star"])}
                </span>
                <div className="my-2 stats">
                    <small className="badge rounded-pill bg-dark">
                        <i className="bi bi-currency-exchange"></i>
                        Box Office: ${(movie["boxOffice"] / 1000000)} million
                    </small> &bull;
                    <small className="badge rounded-pill bg-dark">
                        <i className="bi bi-person-fill"></i>
                        Directed by: Jack Donkey
                    </small> &bull;
                    <small className="badge rounded-pill bg-dark">
                        <i className="bi bi-camera-reels-fill"></i>
                        Genre: {movie["typename"]}
                    </small>
                </div>
                <p className="lead">
                    {movie["description"]}
                </p>
                <div className="text-center">
                    <img className="img-fluid rounded" src={"/" + movie["image"]} alt="fast &amp; furious" />
                </div>
                <p>
                    For a series that, at least for a while, used to be about nitro-injected street cred and grease-monkey car culture, the Fast & Furious movies really only have two gears. You've got fast and you've got furious. Stunts have gotten bigger, glossier and faker, but even at their worst, they've always been speedy, dangerously so. And just as crucially, every utterance about family out of Vin Diesel's mouth has a ponderous solemnity to it. That's the furious part. Over 20 years, the plots have detoured into globe-hopping spy nonsense - and these muscle cars have definitely hopped, sometimes with their own parachutes - yet the white-hot melodrama has skyrocketed in tandem.
                </p>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <h4>" Simply amazing stunts! "</h4>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Editor's choice from <cite title="Source Title">Rotten Apple</cite>
                        </figcaption>
                </figure>
                <p>
                    Superfans will cheer the return of another character from beyond the grave. But when the VFX are this brazenly weightless, your eyes may already be wandering to the corner of the screen to see how many lives are left. There's a mysterious physics to these F&F films: not the laws of gravity or real-world kineticism, but that of catastrophic urban damage with zero casualties.
                </p>
                <img className="img-thumbnail float-end col-3" src="/images/fnf-car.jpg" alt="fast &amp; furious" />
                <p>
                    As these movies have grown from LA street races to car vs submarine showdowns, its characters have essentially evolved into superheroes. F9 addresses this with a funny bit in which a rattled Roman argues they may be literally invincible. How else could they not only live through all the adventures they've been through, but also do so "without a scratch?" In every frame, Dom's crew looks like they could be posing for character posters or perfume ads: gorgeous, cool, and stoic, no matter what impossible scenario they've just been hurled through. Lin leans into the unflappable fantasy, and it makes the melodrama elements all the more exhilarating. 
                </p>
            </article>
            <aside className="shadow-sm review px-4 pt-3 pb-3">
                < Comment comments={[{name: null, comment: "This movie is good but I haven't watched!"}]} />
            </aside>
        </div>
    );
};

export default Review;
