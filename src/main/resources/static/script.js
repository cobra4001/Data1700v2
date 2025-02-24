$(document).ready(function () {
    console.log("MagiScript Library ready!");

    // Click on a book to open the book
    $(".book").click(function () {
        $("#book-view").removeClass("hidden"); // Show books
        $(".spell-page").addClass("hidden"); // Hide all spell books

        // Find and show the correct spell book
        const bookId = $(this).attr("id").replace("-cover", "");
        $("#" + bookId).removeClass("hidden");
    });

    // Close the book
    $("#close-tome").click(function () {
        $("#book-view").addClass("hidden"); // Hide books
        $(".spell-page").addClass("hidden"); // Hide all spell pages
    });

    // Change password form
    $("#change-password-form").submit(function (event) {
        event.preventDefault();
        console.log("Password changed sucessfully.");

        let username = $("#Username").val();
        let password = $("#Password").val();
        let confirmPassword = $("#ConfirmNewPassword").val();
        let pattern = /[0-9]/;

        if(pattern.test(username)){
            alert("Numbers are not permitted in the username!")
            return false;
        }
        else if(username === ""){
            alert("Write in your username")
            return false;
        } else if (password === ""){
            alert("Make an password");
            return false;
        }
        else if (password.length < 8 ) {
            alert("The password has to be at least 8 characters long!");
            return false;

        } else if (password !== confirmPassword) {
            alert("The password needs to match!");
            return false;

        } else{
            alert(`Password for ${username} is changed!`);
            this.reset();
        }

    });

    // Rename form
    $("#rename-wizard-form").submit(function (event) {
        event.preventDefault();
        let newName = $("#Wizard-name").val().trim();
        let pattern = /[0-9]/;
        if(pattern.test(newName)){
            alert("Numbers are not permitted in the username!");
            return false;
        } else if (newName === "") {
            alert("Name is required!");

        } else{
            $(".library h1").text(`Welcome to The MagiScript Library of ${newName}`);
            console.log(`Wizard's name changed to: ${newName}`);
            this.reset();
        }
    });

    // Summon familiar form
    $("#summon-form").submit(function (event) {
        event.preventDefault();
        let familiarName = $("#familiar-name").val().trim();
        let pattern = /[0-9]/;

        if(pattern.test(familiarName)){
            alert("Numbers are not permitted in the username!")
            return false;
        }
        else if (familiarName === "") {
            alert("Familiar Name is required!");
        } else{
            alert(`You have summoned: ${familiarName}!`);
            $("#familiar-name-display").text(`Familiar: ${familiarName}`);
            console.log(`Summoned familiar: ${familiarName}`);
            this.reset();
        }

    });

    // Mood range slider
    $("#mood-range").on("input", function () {
        const moodValue = $(this).val();
        $("#mood-value").text(moodValue);
    });
});
