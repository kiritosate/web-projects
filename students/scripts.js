

var students = [
    
]


for(var i=1;i<20;i++){

    var itemlist = document.createElement("li");
    itemlist.className = "list-group-item pt-4 d-flex justify-content-between text-capitalize";
    var itemlistx = document.createElement("i");
    itemlistx.className = "fas fa-times";
    var itemlisth = document.createElement("h6");
    itemlisth.textContent = "some user";

    var loadHere = document.getElementById("loadListHere");
    itemlist.appendChild(itemlisth);
    itemlist.appendChild(itemlistx);
    loadHere.appendChild(itemlist);
}

