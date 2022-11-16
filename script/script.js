/*
function ShowHideDiv() {
    var chkYes = document.getElementById("chkYes");
    var city_Zaporizhzhia = document.getElementById("city_Zaporizhzhia");
    city_Zaporizhzhia.style.display = chkYes.checked ? "block" : "none";
    var chkNo = document.getElementById("chkNo");
    var region_Zaporizhzhia = document.getElementById("region_Zaporizhzhia");
    region_Zaporizhzhia.style.display = chkNo.checked ? "block" : "none";
}
*/

/*
var disableField = function () {
    var state_1 = document.getElementById("cityOfRegionZap").value.length > 0;
    document.getElementById("regionOfCity").disabled = state_1;
    var state_2 = document.getElementById("regionOfCity").value.length > 0;
    document.getElementById("cityOfRegionZap").disabled = state_2;
};
*/


var regionActive = function() {
    if (document.getElementById("RegionCity").value === "Запоріжжя"){
      document.getElementById("cityOfRegionZap").removeAttribute("disabled")
    } else {
      document.getElementById("regionOfCity").removeAttribute("disabled")
    }
}




var notActive = function() {
  if (document.getElementById("cityOfRegionZap").value.length !=0 || document.getElementById("regionOfCity").value.length != 0){
  document.getElementById("streetInRegion").removeAttribute("disabled")}

  var activeNumberOfBuilding = document.getElementById("streetInRegion").value.length !=0;
  document.getElementById("numberOfBuilding").removeAttribute("disabled");
}


var activButtonSubmit = function() {
    var activeButton = document.getElementById("numberOfBuilding").value.length > 0;
    document.getElementById("buttonSubmit").removeAttribute("disabled");
}


function check() {
  var x = document.getElementById("RegionCity").value;
  var y = document.getElementById("cityOfRegionZap").value;
  var w = document.getElementById("regionOfCity").value;
  var s = document.getElementById("streetInRegion").value;
  var n = document.getElementById("numberOfBuilding").value;
  var reg = y+w;
  var info = `${x}, ${reg}, ${s}, ${n}`
  alert (info)

  let userInformation = {
      region: document.getElementById("RegionCity").value,
      district: [document.getElementById("cityOfRegionZap").value, document.getElementById("regionOfCity").value],
      street: document.getElementById("streetInRegion").value,
      number: document.getElementById("numberOfBuilding").value
  }
  console.log(userInformation);
  console.log(userInformation["district"])
  alert(userInformation);


  let jsonUserInformation = JSON.stringify(userInformation);
  console.log(jsonUserInformation);
  alert(jsonUserInformation)
}




