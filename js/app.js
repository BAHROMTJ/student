import {render} from "./dom.js";

let url="http://localhost:3000/student"

let form=document.querySelector('form');
let arr=[];

form.onsubmit = (elem)=>{
    elem.preventDefault();
let target=elem.target;
let student={
id:  Math.floor(Math.random() * 100),
name:target.name.value,
clas:target.clas.value,
hist:target.hist.value,
art:target.art.value,
points:0
  
}
student.points=Number(student.hist)+Number(student.art)

addStudent(student)

}


async function getStudents(){


    try {
        let {data} = await axios.get(url)
        arr=[...data]
        render()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getStudents()



async function addStudent(student) {
    try {
        let{data} = await axios.post(url,student);
        console.log(data);
    } catch (error) {
        
    }
}


async function daletStudent(id) {
    try {
        let{data} = await axios.delete(`${url}/${id}`);
    getStudents()
        console.log(data);
    } catch (error) {
        
    }
}

async function editStudent(id) {
let dialogedit=document.querySelector(".dialogedit")
dialogedit.show()
    try {
        let{data} = await axios.put(`${url}/${id}`);
    getStudents()
        console.log(data);
    } catch (error) {
        
    }
}

export {
    arr,
    daletStudent,
    editStudent,
}