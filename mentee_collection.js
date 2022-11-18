function addCss(fileName) {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

const url = window.location.href;
const identifier = url.match(/location\/(.*)$/)[1];
var data_location = identifier.substr(0, identifier.indexOf("/"));
console.log("company id is: " + data_location);


switch (data_location) {
  case "uTsNcB0jbMRKjOp3jDCH":
    addCss(
      "https://githubraw.com/ihr-desupport/Mentee_Css/master/test_acc.css"
    );
    break;

  case "8I6IEqK5WkpFH9PraTYb":
    addCss(
      "https://githubraw.com/ihr-desupport/Mentee_Css/master/orange.css"
    );
    break;
  case "CW0wJlIx1wfibbtbaEUS":
    addCss(
      "https://githubraw.com/ihr-desupport/Mentee_Css/master/test_acc.css"
    );
    break;

  default:
    break;
}




if (data_location == "uTsNcB0jbMRKjOp3jDCH") {
}