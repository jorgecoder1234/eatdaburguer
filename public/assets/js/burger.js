$(function () {

    // Add a new burger.
    $(".create-form").on("submit", function (event) {
        event.preventDefault();


        //This for taken the values in the text form
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");

            location.reload();
        });
    });



    $(".devourerburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // To update the eaten burguers
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".deleteburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})