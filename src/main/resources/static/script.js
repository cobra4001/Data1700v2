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

        }
        else if(username === ""){
            alert("Write in your username")

        } else if (password === ""){
            alert("Make an password");

        }
        else if (password.length < 8 ) {
            alert("The password has to be at least 8 characters long!");

        } else if (password !== confirmPassword) {
            alert("The password needs to match!");

        } else{
            alert(`Password for ${username} is changed!`);
            $("#summon-form")[0].reset();
        }
    });

    // Rename form
    $("#rename-wizard-form").submit(function (event) {
        event.preventDefault();
        let newName = $("#wizard-name").val().trim();
        let title = $("#wizard-title").val().trim();
        let pattern = /[0-9]/;
        if(pattern.test(newName)){
            alert("Numbers are not permitted in the username!");

        } else if (newName === "") {
            alert("Name is required!");

        } else if (title === "") {
            alert("Title is required!");

        } else if (pattern.test(title)){
            alert("numbers are not permitted in the title!");

        } else{
            $(".library h1").text(`Welcome to The MagiScript Library of ${newName} ${title}`);
            console.log(`Wizard's name changed to: ${newName} and Wizzard's title changed to ${title}`);
            $("#summon-form")[0].reset();
        }
    });

    $(document).ready(function () {
        // Handle form submission
        $("#summon-form").submit(function (event) {
            event.preventDefault();

            // Get values from the form
            let familiarName = $("#familiar-name").val().trim();
            let familiarBase = $("#familiar-base").val(); // select
            let haswings = $("#haswings").prop("checked"); // checkbox
            let typeofwings = $("#typeofwings").val(); // select
            let levitating = $("#levitating").prop("checked"); // checkbox
            let ExtraHead = $("#ExtraHead").prop("checked"); // checkbox
            let FireBreath = $("#FireBreath").prop("checked"); // checkbox
            let familiarmood = $("#familiarmood").val(); // select
            let date = $("#date").val(); // date
            let pattern = /[0-9]/; // Pattern to check if numbers are in the name

            // Validation checks
            if (pattern.test(familiarName)) {
                alert("Numbers are not permitted in the familiar name!");
                return; // Stop form submission
            } else if (familiarName === "") {
                alert("Familiar Name can't be empty!");
                return;
            } else if (familiarBase === "") {
                alert("Familiar Base can't be blank!");
                return;
            } else if (haswings && typeofwings === "") {  // Check if wings are selected and type is specified
                alert("Please specify the type of wings!");
                return;
            } else if (familiarmood === "") {
                alert("Please select a mood for your familiar!");
                return;
            } else if (date === "") {
                alert("Please set an end date for the contract!");
                return;
            }

            // Build the familiar's description dynamically
            let familiarDescription = `You have summoned: ${familiarName}, a ${familiarBase}`;

            // Add wings description if applicable
            if (haswings) {
                familiarDescription += ` with ${typeofwings} wings`;
            }

            // Add additional traits
            let traits = [];
            if (levitating) traits.push("Levitating");
            if (ExtraHead) traits.push("Extra Head");
            if (FireBreath) traits.push("Fire Breath");

            if (traits.length > 0) {
                familiarDescription += `. It has the following customizations: ${traits.join(", ")}.`;
            }

            // Add mood description
            familiarDescription += ` It appears to be ${familiarmood}.`;

            // Add contract end date
            familiarDescription += ` The contract ends on ${date}.`;

            // Display the familiar's details
            alert(familiarDescription);
            console.log(familiarDescription);

            // Display the familiar's name in the top-right corner
            $("#familiarnamedisplay").text(`Familiar: ${familiarName}`).show();

            // Reset the form after successful submission
            $("#summon-form")[0].reset();
        });

        // Dynamically show or hide wings field based on the "Has Wings" checkbox
        $("#haswings").change(function () {
            if ($(this).prop("checked")) {
                $("#wings-type").show(); // Show wings type select if "Has Wings" is checked
            } else {
                $("#wings-type").hide(); // Hide wings type select if "Has Wings" is unchecked
            }
        });

        // Trigger the change event to ensure proper display on page load
        $("#haswings").trigger("change");
    });


    // Mood range slider
    $("#mood-range").on("input", function () {
        const moodValue = $(this).val();
        $("#mood-value").text(moodValue);
    });
});
