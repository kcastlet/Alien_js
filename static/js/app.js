//from data.js
var tableData = data;

//select table body
var tbody = d3.select("tbody");

//log data
console.log(tableData);

//loop through data for sightings
tableData.forEach(function(info) {
    console.log(info);
});

//select submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {

    //prevent refresh of page
    d3.event.preventDefault();

    //select input and get html
    var inputElement = d3.select("#datetime");

    //secure value of input
    var inputValue = inputElement.property("value");

    //log input
    console.log("input", inputValue);

    //filter data
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    //log filtered data
    console.log("filtered data", filteredData);

    //select table body
    var tbody = d3.select("tbody");
    tbody.html("");

    //append data into table
    filteredData.forEach(function(info) {
        console.log(info);
        var row = tbody.append("tr");
        Object.entries(info).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
