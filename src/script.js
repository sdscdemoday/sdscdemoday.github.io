window.onload = function() {

    // Initialize service worker
    if (!"ServiceWorker" in navigator) { // Browser not support service worker
        console.log("Service Worker not supported!");
    } else if(!navigator.serviceWorker) { // Unsecured origin, cannot register service worker
        console.log("Service Worker unavaliable in insecure origin!");
    } else {
        navigator.serviceWorker.register("./service-worker.js", { scope: './' }).then(registration => {
            console.log("Service Worker registered!");

        }).catch( error => {
            console.log("Service Worker registration failed.");
        });
    }

    // Load Indexed DB
    if (!idb) {
        loadIDB();
    }

    // Tooltip code for bootstrap
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(tooltipTriggerEl => {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    })

    // Initialize Text area word counter
    // Ref: https://stackoverflow.com/questions/17909646/counting-and-limiting-words-in-a-textarea
    let txtDescription = document.getElementById("txtDescription");
    if (txtDescription) {
        txtDescription.onkeyup = event => {
            let txtDescription = event.target;
            let count = 0;

            let value = txtDescription.value;
        
            // Match all non-whitespace
            if ((value.match(/\S+/g)) != null) {
                count = value.match(/\S+/g).length;
            }

            wordCount.classList.remove("word-count-exceeded");
        
            if (count > 200) {

            // Split the string on first 200 words and rejoin on spaces
            var trimmedValue = value.split(/\s+/, 200).join(" ");

            // Add a space at the end to make sure more typing creates new words
            txtDescription.value = trimmedValue + " ";

            wordCount.classList.add("word-count-exceeded");

            } else {

                let wordCount = document.getElementById("wordCount");
                wordCount.innerText = count;

            }
        }
    };
}

function submittedLoad() {
    onTableRead();
}

showValidationMessage = (element, message) => {
    let validateMissing = element.parentNode.querySelector("small.validate");
    if (validateMissing) {
        validateMissing.innerHTML = message;
        validateMissing.classList.remove("d-none");
    }
}

formChk = () => {

    let data = {};
                
    var success = true;
    var frmSubmit = document.querySelector("#frmSubmit");
    var allInputs = frmSubmit.querySelectorAll("input");
    var allValidates = frmSubmit.querySelectorAll(".validate");
    //var rdbStarAll = frmSubmit.querySelectorAll('input[name="star"]');

    var txtName = frmSubmit.querySelector("#txtName"); // Retrieve the corresponding element;
    var ddlType = frmSubmit.querySelector("#ddlType");
    var txtDirector = frmSubmit.querySelector("#txtDirector"); // Retrieve the corresponding element
    var radioBorder = frmSubmit.querySelector("#radioBorder");
    var chkAgree = frmSubmit.querySelector("#chkAgree");
    var txtBoxOffice = frmSubmit.querySelector("#txtBoxOffice");
    var dateReleaseDate = frmSubmit.querySelector("#dateReleaseDate");
    var txtDescription = frmSubmit.querySelector("#txtDescription");
    var rdbStar = document.querySelector('input[name="star"]:checked');

    var name = txtName.value.trim(); // Retrieve the input name
    var type = Number(ddlType.value.trim());
    var director = txtDirector.value.trim(); // Retrieve the actor name
    var star = rdbStar ? rdbStar.value : ""; // May be null and unselected
    var agree = chkAgree.checked;
    var boxOffice = txtBoxOffice.value.trim();
    var releaseDate = dateReleaseDate.value.trim();
    var description = "";

    var msgBox = document.querySelector("#messageBox"); // Retrieve the corresponding message box element
    var msgBoxAlert = document.querySelector("#messageBoxAlert"); 

    var btnSubmit = document.querySelector("#btnSubmit");

    // Reset the colour of the textboxes to white if necessary
    allInputs.forEach(input => input.classList.remove("border-danger"));

    // Reset validation messages to hidden
    allValidates.forEach(validate => validate.classList.add("d-none"));

    // Reset radio group validation
    radioBorder.classList.remove("border-danger");
    radioBorder.classList.remove("border");

    // Reset Dropdown List
    ddlType.classList.remove("border-danger");
    
    if(name === "") {

        // Update the error message, highlight colour and Boolean value to prevent submission of form 
        txtName.classList.add("border-danger");
        showValidationMessage(txtName, "Movie must have a name.");
        success = false;

    } else {

        // Match all illegal characters
        let matches = name.match(/[^a-zA-Z0-9 \.,']/ig, "");

        // Create unique set
        let set = [...new Set(matches)];

        if (set.length > 0) {
            // Update the error message, highlight colour and Boolean value to prevent submission of form 
            txtName.classList.add("border-danger");
            showValidationMessage(txtName, "Invalid characters ( " + set.join(" ") + " )");
            success = false;
        }

    }

    if(type <= 0) {
        // Update the error message, highlight colour and Boolean value to prevent submission of form 
        ddlType.classList.add("border-danger");
        showValidationMessage(ddlType, "Select a movie genre.");
        success = false;
    }

    if(director === "") {

        // Update the error message, highlight colour and Boolean value to prevent submission of form
        txtDirector.classList.add("border-danger");
        showValidationMessage(txtDirector, "Director cannot be empty!");
        success = false;

    } else {

        // Match all illegal characters
        let matches = director.match(/[^a-zA-Z \.,]/ig, "");

        // Create unique set
        let set = [...new Set(matches)];

        if (set.length > 0) {
            // Update the error message, highlight colour and Boolean value to prevent submission of form 
            txtDirector.classList.add("border-danger");
            showValidationMessage(txtDirector, "Invalid characters ( " + set.join(" ") + " )");
            success = false;
        }

    }

    if(!star || isNaN(star)) { // null or nothing selected for name
        showValidationMessage(radioBorder, "Select a rating from 1 to 5.");
        radioBorder.classList.add("border-danger");
        radioBorder.classList.add("border");
        success = false;
    }

    if(!agree) { // t&c checked
        showValidationMessage(chkAgree, "You must agree with the terms and conditions to continue!");
        chkAgree.classList.add("border-danger");
        success = false;
    }

    if(boxOffice != "") { // Optional

        // Strip $ or other pre and post fix
        boxOffice = boxOffice.replace(/[^0-9 \.,-]/ig, "");

        // Relace textbox value
        txtBoxOffice.value = boxOffice;

        if (isNaN(boxOffice)) {

            // Update the error message, highlight colour and Boolean value to prevent submission of form 
            txtBoxOffice.classList.add("border-danger");
            showValidationMessage(txtBoxOffice, "Enter an numeric amount.");
            success = false;

        } else {

            let amount = Number(boxOffice);
            if (amount < 0) { // Box Office cannot be negative
                // Update the error message, highlight colour and Boolean value to prevent submission of form 
                txtBoxOffice.classList.add("border-danger");
                showValidationMessage(txtBoxOffice, "Cannot be negative.");
                success = false;
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
            dateReleaseDate.classList.add("border-danger");
            showValidationMessage(dateReleaseDate, dateErrors.join(" "));
            success = false;
        }

    }

    if(releaseDate != "") { // Optional

        let value = txtDescription.value;

        // Match all non-whitespace
        if ((value.match(/\S+/g)) != null) {
            count = value.match(/\S+/g).length;

            if (count > 200) {
                // Update the error message, highlight colour and Boolean value to prevent submission of form 
                txtDescription.classList.add("border-danger");
                showValidationMessage(txtDescription, "Word count exceeded.");
                success = false;
            } else {
                description = value; // Use value only if not too long
            }

        }

    }

    // Show user message
    if (!success) {
        msgBox.innerHTML = "Please check your submission. Some fields may contain invalid values!";
        msgBoxAlert.classList.add("show");
        btnSubmit.disabled = true;
    } else {     
        msgBoxAlert.classList.remove("show");
        msgBox.innerHTML="";
        btnSubmit.disabled = false;
    }

    // Create js object
    data["name"] = name;
    data["type"] = type;
    data["director"] = director;
    data["star"] = star;
    data["agree"] = agree;
    data["boxOffice"] = boxOffice;
    data["releaseDate"] = releaseDate;
    data["description"] = description;

    return [success, data];

}

formSubmit = () => {

    let [success, data] = formChk();
    
    // Confirm submission
    if (success) {
        success = confirm("Are you sure you want to submit?");

        // Safe to localStorage
        localStorage.setItem("data", JSON.stringify(data));
    }
    
    return success;
}

onTableRead = () => {
    var tblResultBody = document.querySelector("#tblResultBody");

    let data = null;
    let str = localStorage.getItem("data");

    if (str) { // Not null, key exist
        data = JSON.parse(str);
        localStorage.clear();

        // Create js object
        let name = `<tr><td class="fw-bold">Name:</td><td>${data["name"]}</td></tr>`;
        let type = `<tr><td class="fw-bold">Type:</td><td>${data["type"]}</td></tr>`;
        let director = `<tr><td class="fw-bold">Director:</td><td>${data["director"]}</td></tr>`;
        let star = `<tr><td class="fw-bold">Stars:</td><td>${data["star"]}</td></tr>`;
        let boxOffice = `<tr><td class="fw-bold">Box Office:</td><td>$ ${data["boxOffice"]}</td></tr>`;
        let releaseDate = `<tr><td class="fw-bold">Release Date:</td><td>${data["releaseDate"]}</td></tr>`;
        let description = `<tr><td class="fw-bold">Description:</td><td>${data["description"]}</td></tr>`;

        tblResultBody.innerHTML = name + type + director + star + boxOffice + releaseDate + description;

    }

}
