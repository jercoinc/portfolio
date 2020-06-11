function validateForm(event) {
    //Variables for user input
    let name = document.getElementById("tbName").value;
    let email = document.getElementById("tbEmail").value;
    let subject = document.getElementById("tbSubject").value;
    let message = document.getElementById("message").value;

    //Access error message <span>s
    let rfvName = document.getElementById("rfvName");
    let rfvEmail = document.getElementById("rfvEmail");
    let rfvSubject = document.getElementById("rfvSubject");
    let rfvMessage = document.getElementById("rfvMessage");

    // Regular Expressions Object
    let regEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    // Regular Expression Verify first name contains only alpha characters
    let regAlphaCheck = new RegExp(/^[a-zA-Z ]+$/);
    //Test all of our condtions and stop form from submitting

    if (name.length == 0
        || email.length == 0
        || subject.length == 0
        || message.length == 0
        || !regEmail.test(email)) {

        event.preventDefault(); // Stops default action from happening (form Submission)

        //Test individual condtions and print error messages
        // Name
        if (name.length == 0) {
            rfvName.textContent = "* Name is required";

        }
        else {
            rfvName.textContent = "";
        }
        // Email
        if (email.length == 0) {
            rfvEmail.textContent = "* Email is required";

        }
        else {
            rfvEmail.textContent = "";
        }
        // Subject
        if (subject.length == 0) {
            rfvSubject.textContent = "* Subject is required";

        }
        else {
            rfvSubject.textContent = "";
        }
        // Message
        if (message.length == 0) {
            rfvMessage.textContent = "* Message is required";

        }
        else {
            rfvMessage.textContent = "";
        }

        //Regular Expression Email Test
        if (email.length > 0 && !regEmail.test(email)) {
            rfvEmail.textContent = "* Must be a valid email address";

        }
        if (email.length > 0 && regEmail.test(email)) {
            rfvEmail.textContent = "";

        }

        //Regular Expression Alpha Name Test
        if (name.length > 0 && !regAlphaCheck.test(name)) {
            rfvName.textContent = "* Must be a valid name";

        }
        if (name.length > 0 && regAlphaCheck.test(name)) {
            rfvName.textContent = "";

        }

    }//end main if




}//end function