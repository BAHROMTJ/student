import {arr,daletStudent,editStudent} from "./app.js";



function render() {
let tbody = document.querySelector("tbody");    
tbody.innerHTML ="";

arr.forEach(elem => {
    
let tr=document.createElement("tr");
let tdid=document.createElement("td");
let tdname=document.createElement("td");
let tdclss=document.createElement("td");
let tdhistory=document.createElement("td");
let tdart=document.createElement("td");
let tdpoints=document.createElement("td");
let tdeddel=document.createElement("td");
let btndel=document.createElement("button");
let btnedit=document.createElement("button");
btndel.innerHTML="Delete";

btnedit.innerHTML="Edit";

tdid.innerHTML=elem.id;

tdname.innerHTML=elem.name;

tdclss.innerHTML=elem.clas;

tdhistory.innerHTML=elem.hist;

tdart.innerHTML=elem.art;

tdpoints.innerHTML=elem.points;






tbody.appendChild(tr);
tr.appendChild(tdid);

tr.appendChild(tdname);

tr.appendChild(tdclss);

tr.appendChild(tdhistory);

tr.appendChild(tdart);

tr.appendChild(tdpoints);

tr.appendChild(tdeddel);
tdeddel.appendChild(btndel);

tdeddel.appendChild(btnedit);


btndel.onclick = ()=>{
console.log(elem.id);
    daletStudent(elem.id)
}
btnedit.onclick = ()=>{
    editStudent(elem.id) 
}
})



}


export{
    render,

}