//object to hold weather data
let data = JSON.parse(jsonDataWeather);

//string variable to hold users searches
let letters = "";

//function to add all of the weather data to the web page based on search results
function filterResults() {
    let rowData = "";
    letters = document.getElementById("filtBy").value;   
    for (let i = 0; i < data.length; i++) {
        let name = data[i].CityName;
        if (name.startsWith(letters)) {
            rowData += "<tr>" +
                "<td>" + data[i].CityID + "</td>" +
                "<td>" + data[i].CityName + "</td>" +
                "<td>" + data[i].MainWeather + "</td>" +
                "<td>" + data[i].Temp + "</td>" +
                "<td>" + data[i].TempUnit + "</td>" +
                "<td>" + data[i].FeelsLike + "</td>" +
                "<td>" + data[i].RainPossibilityPercentage + "</td>" +
                "</tr>";
        }
        else if (name == "") {
            rowData += "<tr>" +
                "<td>" + data[i].CityID + "</td>" +
                "<td>" + data[i].CityName + "</td>" +
                "<td>" + data[i].MainWeather + "</td>" +
                "<td>" + data[i].Temp + "</td>" +
                "<td>" + data[i].TempUnit + "</td>" +
                "<td>" + data[i].FeelsLike + "</td>" +
                "<td>" + data[i].RainPossibilityPercentage + "</td>" +
                "</tr>";
        }
    }

    let tab = "<table id=\"weatherTable\">" +
        "<tr>" +
        "<th>CityID</th>" +
        "<th>CityName</th>" +
        "<th>MainWeather</th>" +
        "<th>Temp</th>" +
        "<th>TempUnit</th>" +
        "<th>FeelsLike</th>" +
        "<th>RainPossibilityPercentage</th>" +
        "</tr>" +
        rowData +
        "</table >";

    document.getElementById("tableDiv").innerHTML = tab;
}

//event listener to add the data to the web page when it is loaded
document.addEventListener("DOMContentLoaded", filterResults);

//event listener to add the data to the web page when the button is clicked
let bnt = document.getElementById("filter");
bnt.addEventListener("click", filterResults);

