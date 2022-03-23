







document.querySelector("form").addEventListener("submit",bozaz)
function bozaz()
{
    event.preventDefault();
     
    var  Itmename = document.querySelector("#category").value;
    var  ItmeQty = document.querySelector("#name").value;
    var  ItmePriority = document.querySelector("#price").value;

    console.log(Itmename,ItmeQty,ItmePriority)

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText=Itmename;
    var td2 = document.createElement("td");
    td2.innerText=ItmeQty;
    var td3 = document.createElement("td");
    td3.innerText=ItmePriority;


    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr);

}
