// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",data)
function data()
{
event.preventDefault();

var img = document.querySelector("#image").value;
var name = document.querySelector("#name").value;
var batch = document.querySelector("#batch").value;
var DSA = document.querySelector("#dsa").value;
var CS = document.querySelector("#cs").value;
var Coding = document.querySelector("#coding").value;

console.log(name,batch,DSA,CS,Coding)

var tr = document.createElement("tr")

var img = document.createElement("td");
img.innerText = img
var td1 = document.createElement("td");
td1.innerText =name;
var td2 = document.createElement("td");
td2.innerText =batch;
var td3 = document.createElement("td");
td3.innerText =DSA;
var td4 = document.createElement("td");
td4.innerText = CS;
var td5 = document.createElement("td");
td5.innerText =Coding;

tr.append(img,td1,td2,td3,td4,td5);
document.querySelector("tbody").append(tr);




}