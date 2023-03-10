$(document).ready(function () {
  $("#btn").click(function (e) {
    e.preventDefault();

    //Insert The Record
    var formData = $("#myform").serialize();

    $.ajax({
      url: "insert.php",
      type: "POST",
      data: formData,
      success: function (response) {
        alert(response);
      },
    });
  });

  $("#back").hide();
  $("#table-data").hide();

  $("#view").click(function () {
    $("#form-container").hide();
    $("#back").show();
    $("#table-data").show();
  });

  //view the records
  $("#view").click(function () {
    $.ajax({
      url: "view.php",
      type: "GET",
      dataType: "json",
      success: function (response) {
        var html = "";
        for (var i = 0; i < response.length; i++) {
          html += "<tr>";
          html += "<td>" + response[i].fname + "</td>";
          html += "<td>" + response[i].lname + "</td>";
          html += "<td>" + response[i].email + "</td>";
          html += "<td>" + response[i].password + "</td>";
          html += "<td>" + response[i].address + "</td>";
          html += "<td>" + response[i].city + "</td>";
          html += "<td>" + response[i].state + "</td>";
          html += "<td>" + response[i].zip + "</td>";
          html +=
            "<td>" +
            '<button type="button" class="btn btn-warning">Edit</button>' +
            "</td>";

          html += "<td>";
          html +=
            '<button type="button" class="btn btn-danger delete-button" data-id="' +
            response[i].id +
            '">Delete</button>';
          html += "</td>";

          html += "</tr>";
        }
        $("#table-body").html(html);
      },
    });
  });

  //delete the records
  $(document).on("click", ".delete-button", function () {
    var id = $(this).data("id");
    if (confirm("Are you sure you want to delete this record?")) {
      $.ajax({
        url: "delete.php",
        type: "POST",
        data: { id: id },
        success: function (response) {
          alert(response);
          // Refresh the table
          $("#view").trigger("click");
        },
        error: function (xhr, status, error) {
          alert("Error: " + error);
        },
      });
    }
  });

  //fetch the record based on id that define in database as primary key with auto increment
  $(document).on("click", ".edit-button", function () {
    var id = $(this).data("id");

    $.ajax({
      url: "fetch.php",
      method: "POST",
      data: { id: id },
      dataType: "json",
      success: function (response) {
        $("#fname").val(response.fname);
        $("#lname").val(response.lname);
        $("#email").val(response.email);
        $("#password").val(response.password);
        $("#address").val(response.address);
        $("#city").val(response.city);
        $("#state").val(response.state);
        $("#zip").val(response.zip);

        // console.log(response);

        $("#myform").show();
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error);
      },
    });
  });

  $(document).on("click", "#btn", function (e) {
    e.preventDefault();

    // Retrieve the form data as an object
    var formData = {
      fname: $("#fname").val(),
      lname: $("#lname").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      address: $("#address").val(),
      city: $("#city").val(),
      state: $("#state").val(),
      zip: $("#zip").val(),
      id: $(this).data("id"),
    };

    // Send the form data to the server using AJAX
    $.ajax({
      url: "edit.php",
      method: "POST",
      data: formData,
      success: function (response) {
        alert(response);
      },
      error: function (xhr, status, error) {
        alert("Error: " + error);
      },
    });
  });

  $("#back").click(() => {
    $("#back").hide();
    $("#form-container").show();
    $("#table-data").hide();
  });
});
