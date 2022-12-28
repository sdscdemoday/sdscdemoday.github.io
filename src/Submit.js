import { useEffect, useRef, useState } from "react";
import { Tooltip } from "bootstrap";
import configData from "./config.json";

const Submit = () => {

    /*const ALL_GENRES = [
        {value: "horror", text: "Horror"},
        {value: "comedy", text: "Comedy"},
        {value: "action", text: "Action"},
        {value: "scifi", text: "Science Fiction"}];*/

    const [allGenres, setAllGenres] = useState([]);

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [star, setStar] = useState(0);
    const [director, setDirector] = useState("");
    const [boxOffice, setBoxOffice] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [agree, setAgree] = useState(false);

    const [nameError, setNameError] = useState("");
    const [genreError, setGenreError] = useState("");
    const [starError, setStarError] = useState("");
    const [directorError, setDirectorError] = useState("");
    const [boxOfficeError, setBoxOfficeError] = useState("");
    const [releaseDateError, setReleaseDateError] = useState("");
    const [agreeError, setAgreeError] = useState("");

    const [count, setCount] = useState(0);
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const agreeRef = useRef();

    const [submitted, setSubmitted] = useState(false);
    const [formChanged, setFormChanged] = useState(false);

    useEffect(() => {
        new Tooltip(agreeRef.current);
    }, [agreeRef]); // Load once

    useEffect(() => {
        if (formChanged) { // Trigger after form first edited
            checkForm();
        }
    }); // Load every rerender

    useEffect(() => {
        loadGenres();
    }, []);

    const onFormChange = e => {
        setFormChanged(true);
    }

    const onDescriptionChange = e => {
        let value = e.target.value;
        let count = 0;
    
        // Match all non-whitespace
        if ((value.match(/\S+/g)) != null) {
            count = value.match(/\S+/g).length;
        }
    
        if (count > 200) {
            // Split the string on first 200 words and rejoin on spaces
            value = value.split(/\s+/, 200).join(" ");
            count = 200;
        }

        setDescription(value);
        setCount(count);
    }

    const checkForm = () => {

        let success = true;

        if(name === "") {

            // Update the error message, highlight colour and Boolean value to prevent submission of form 
            //txtName.classList.add("border-danger");
            //showValidationMessage(txtName, "Movie must have a name.");
            setNameError("Movie must have a name.");
            success = false;
    
        } else {
    
            // Match all illegal characters
            let matches = name.match(/[^a-zA-Z0-9 \.,']/ig, "");
    
            // Create unique set
            let set = [...new Set(matches)];
    
            if (set.length > 0) {
                // Update the error message, highlight colour and Boolean value to prevent submission of form 
                //txtName.classList.add("border-danger");
                //showValidationMessage(txtName, "Invalid characters ( " + set.join(" ") + " )");
                setNameError(`Invalid characters ( ${set.join(" ")} )`);
                success = false;
            } else {
                setNameError("");
            }
    
        }
    
        if(genre === "") {
            // Update the error message, highlight colour and Boolean value to prevent submission of form 
            //ddlType.classList.add("border-danger");
            //showValidationMessage(ddlType, "Select a movie genre.");
            setGenreError("Select a movie genre.");
            success = false;
        } else {
            setGenreError("");
        }
    
        if(director === "") {
    
            // Update the error message, highlight colour and Boolean value to prevent submission of form
            //txtDirector.classList.add("border-danger");
            //showValidationMessage(txtDirector, "Director cannot be empty!");
            setDirectorError("Director cannot be empty!");
            success = false;
    
        } else {
    
            // Match all illegal characters
            let matches = director.match(/[^a-zA-Z \.,]/ig, "");
    
            // Create unique set
            let set = [...new Set(matches)];
    
            if (set.length > 0) {
                // Update the error message, highlight colour and Boolean value to prevent submission of form 
                //txtDirector.classList.add("border-danger");
                //showValidationMessage(txtDirector, "Invalid characters ( " + set.join(" ") + " )");
                setDirectorError(`Invalid characters ( ${set.join(" ")} )`);
                success = false;
            } else {
                setDirectorError("");
            }
    
        }
    
        if(!star || isNaN(star)) { // null or nothing selected for name
            //showValidationMessage(radioBorder, "Select a rating from 1 to 5.");
            //radioBorder.classList.add("border-danger");
            //radioBorder.classList.add("border");
            setStarError("Select a rating from 1 to 5.");
            success = false;
        } else {
            setStarError("");
        }
    
        if(!agree) { // t&c checked
            //showValidationMessage(chkAgree, "You must agree with the terms and conditions to continue!");
            //chkAgree.classList.add("border-danger");
            setAgreeError("You must agree with the terms and conditions to continue!");
            success = false;
        } else {
            setAgreeError("");
        }
    
        if(boxOffice != "") { // Optional
    
            // Strip $ or other pre and post fix
            let boxOffice2 = boxOffice.replace(/[^0-9 \.,-]/ig, "");
    
            // Relace textbox value
            setBoxOffice(boxOffice2);
            //txtBoxOffice.value = boxOffice;
    
            if (isNaN(boxOffice2)) {
    
                // Update the error message, highlight colour and Boolean value to prevent submission of form 
                //txtBoxOffice.classList.add("border-danger");
                //showValidationMessage(txtBoxOffice, "Enter an numeric amount.");
                setBoxOfficeError("Enter an numeric amount.");
                success = false;
    
            } else {
    
                let amount = Number(boxOffice2);
                if (amount < 0) { // Box Office cannot be negative
                    // Update the error message, highlight colour and Boolean value to prevent submission of form 
                    //txtBoxOffice.classList.add("border-danger");
                    //showValidationMessage(txtBoxOffice, "Cannot be negative.");
                    setBoxOfficeError("Cannot be negative.");
                    success = false;
                } else {
                    setBoxOfficeError("");
                }
    
            }
        }
    
        if(releaseDate != "") { // Optional
    
            var dateErrors = [];
    
            // Validate date format
            let date = Date.parse(releaseDate);
    
            if (date) { // Date is parsable
    
                let now = new Date();
                if (date > now) { // Future release, cannot review
                    dateErrors.push("Cannot review a movie in the future.");
                }
                
            } else {
                dateErrors.push("Invalid date format.");
            }
    
            if (dateErrors.length > 0) {
                // Update the error message, highlight colour and Boolean value to prevent submission of form 
                //dateReleaseDate.classList.add("border-danger");
                //showValidationMessage(dateReleaseDate, dateErrors.join(" "));
                setReleaseDateError(dateErrors.join(" "));
                success = false;
            } else {
                setReleaseDateError("");
            }
    
        }

        //console.log(success);
        if (!success) {
            setMessage("Please check your submission. Some fields may contain invalid values!");
        } else {
            setMessage("");
        }
    }

    const onSubmit = e => {

        // Confirm submission
        let success = window.confirm("Are you sure you want to submit?");

        if (success) {

            // Create js object
            let data = {};
            data["name"] = name;
            data["type"] = genre;
            data["director"] = director;
            data["star"] = star;
            data["agree"] = agree;
            data["boxOffice"] = boxOffice;
            data["releaseDate"] = releaseDate;
            data["description"] = description;

            /*fetch("https://localhost:3001/movies", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            }).then(response => {

            });*/

            setSubmitted(true);
        }

        e.preventDefault();
    }

    const loadGenres = () => {
        fetch(configData.genreURL)
        .then(response => response.json())
        .then(data => { 
            setAllGenres(data);
        });
    }

    return ( !submitted ?
        <div className="container-fluid form-content my-4 pt-2 pb-4 shadow-sm">
            <div className="title">
                <h2>Registration</h2>
            </div>
            <div className="main">
                { message ?
                    <div id="messageBoxAlert" className="alert alert-danger d-flex align-items-center alert-dismissible" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-exclamation" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                        <div id="messageBox" className="mx-2">{message}</div>
                        {/*<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}
                    </div> : <></>
                }
                <form className="row g-3 needs-validation" action="" method="GET" id="frmSubmit" onChange={onFormChange} noValidate>
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="txtName">Name<span className="text-danger mandatory-sign">*</span>: </label>
                        <input className={"form-control" + (nameError !== "" ? " border-danger" : "")} type="text" name="name" id="txtName" placeholder="e.g. Terminator X" maxLength="200"
                            value={name} onChange={e => setName(e.target.value)} required />
                        <small className="text-danger validate">{nameError}</small>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="ddlType">Type<span className="text-danger mandatory-sign">*</span>: </label>
                        <select className={"form-select" + (genreError !== "" ? " border-danger" : "")} name="type" id="ddlType" value={genre} onChange={e => setGenre(e.target.value)}>
                            <option key={99} value="">- Select a Genre -</option>
                            { allGenres.map((g,i) => <option key={i} value={g?.name}>{g?.description}</option>) }
                        </select>
                        <small className="text-danger validate">{genreError}</small>
                    </div>
                    <div className="col-md-12">
                        <span id="radioBorder" className={"form-control" + (starError !== "" ? " border-danger" : "")}>
                            {
                            [1,2,3,4,5].map(i => 
                                <span key={i}>
                                    <input className="form-check-input mx-1" type="radio" name="star" id={"rdbStar" + i}
                                        value={`${i}`} checked={star === i} onChange={e => setStar(Number(e.target.value))} />
                                    <label className="form-check-label me-1" htmlFor={"rdbStar" + i}>{i + " Star"}</label>
                                </span>)
                            }
                        </span>
                        <br/>
                        <small className="text-danger validate">{starError}</small>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="txtDirector">Director<span className="text-danger mandatory-sign">*</span>: </label>
                        <input className={"form-control" + (directorError !== "" ? " border-danger" : "")} type="text" name="director" id="txtDirector" placeholder="e.g. Steven Spielberg"
                            value={director} onChange={e => setDirector(e.target.value)} maxLength="200" required />
                        <small className="text-danger validate">{directorError}</small>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="txtBoxOffice">Box Office: </label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="txtBoxOfficePrepend">$</span>
                            <input className={"form-control" + (boxOfficeError !== "" ? " border-danger" : "")} type="text" name="boxOffice" id="txtBoxOffice" placeholder="e.g. 200000"
                                value={boxOffice} onChange={e => setBoxOffice(e.target.value)} aria-describedby="txtBoxOfficePrepend" />
                            <small className="text-danger w-100 validate">{boxOfficeError}</small>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label" htmlFor="dateReleaseDate">Released:</label>
                        <input className={"form-control" + (releaseDateError !== "" ? " border-danger" : "")} name="releaseDate" id="dateReleaseDate" type="date" value={releaseDate} onChange={e => setReleaseDate(e.target.value)} />
                        <small className="text-danger validate">{releaseDateError}</small>                        
                    </div>
                    <div className="col-md-12">
                        <label className="form-label" htmlFor="txtDescription">
                            Description (<span id="wordCount" className={count > 150 ? "text-danger" : ""}>{count}</span> of 200 Word limit): 
                        </label>
                        <textarea className="form-control" id="txtDescription" onChange={onDescriptionChange} value={description}></textarea>
                        <small className="text-danger validate"></small>
                    </div>
                    <div className="col-md-12">
                        <input className={"form-check-input" + (!agree ? " border-danger" : "")} type="checkbox" name="agree" id="chkAgree" checked={agree} onChange={e => {setAgree(e.target.checked)} } />
                        <label className="form-check-label form-label mx-2" htmlFor="chkAgree">{"I agree with the "}
                            <span ref={agreeRef} className="alert-link text-decoration-underline" data-bs-toggle="tooltip" data-bs-placement="top" title="You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. 
                            If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.">
                                terms and conditions
                            </span>.
                        </label>
                        <br/>
                        <small className="text-danger validate">{agreeError}</small>
                    </div>
                    <div className="col-12 text-end center">
                        {/*<input className="btn btn-outline-primary" type="button" value="Save Draft" onclick="return formSave();"/>*/}
                        <input id="btnSubmit" className="btn btn-primary" type="submit" value="Submit" onClick={onSubmit} disabled={message || (count <= 0)} />
                    </div>
                </form>
                
            </div>
        </div> :
        <div className="container-fluid form-content my-4 pt-2 pb-4 shadow-sm">
            <div className="title">
                <h2>Submission Confirmed</h2>
                <div id="messageBoxAlert" class="alert alert-success d-flex align-items-center" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                    </svg>
                    <div id="messageBox" className="mx-2">
                        Thank you for your review. We will review your review within 3 business days!
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <table id="tblResult" className="table table-responsive">
                    <tbody id="tblResultBody">
                        <tr><td class="fw-bold">Name:</td><td>{name}</td></tr>
                        <tr><td class="fw-bold">Genre:</td><td>{genre}</td></tr>
                        <tr><td class="fw-bold">Director:</td><td>{director}</td></tr>
                        <tr><td class="fw-bold">Stars:</td><td>{star}</td></tr>
                        <tr><td class="fw-bold">Box Office:</td><td>$ {boxOffice}</td></tr>
                        <tr><td class="fw-bold">Release Date:</td><td>{releaseDate}</td></tr>
                        <tr><td class="fw-bold">Description:</td><td>{description}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Submit;
