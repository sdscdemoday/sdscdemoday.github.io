import { useEffect, useState } from "react";

const Search = (props) => {

    const [keyword, setKeyword] = useState("");
    const [genre, setGenre] = useState(props.defaultGenre);

    const onChange = e => {
        let k = e.currentTarget.value;
        setKeyword(k); // async
        props.onSearch(k, genre);
    }

    const onClick = e => {
        props.onSearch(keyword, genre);
        e.preventDefault();
    }

    const onGenreSelection = e => {
        let value = e.currentTarget.value;
        setGenre(value); // async
        
        props.onSearch(keyword, value);
    }

    useEffect(() => {
        //setGenre(props.defaultGenre);
    }, []);

    return (
        <div className="container bg-warning progress-bar-striped mb-2">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <form className="row" action="" method="GET">
                        <div className="input-group mb-2 mt-2 search">
                            <input className="form-control" type="text" name="film" id="txtFilm" 
                                placeholder="Search Speakers ..."
                                onChange={onChange} value={keyword} />
                            <select className="form-select oc" name="type" id="ddlType" value={genre} onChange={onGenreSelection}>
                                <option key={-1} value="">All Topics</option>
                                { (props.allGenres || []).map((g,i) => <option key={i} value={g?.name}>{g?.description}</option>) }
                            </select>
                            <input className="btn btn-success" type="submit" value="Search" onClick={onClick} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;
