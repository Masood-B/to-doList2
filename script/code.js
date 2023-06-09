const addName = document.querySelector("#press1") // add
const sortName = document.querySelector("#press2") // sort
const nameDisplay = document.querySelector("#display1") // display input
const list = document.querySelector("#list") // list
let nameList = JSON.parse(localStorage.getItem('name-list')) ? JSON.parse(localStorage.getItem('name-list')) : []; // info
let idName = nameList[nameList.length-1] ? nameList[nameList.length-1].id + 1: 1; // ID number
let deleteName; // Delete
let checkboxName; //Checkbox
let editName; // Edit

// Add function
addName.addEventListener("click", newName);
function newName(){
    event.preventDefault();
    if(nameDisplay.value == ""){
      alert("you need to add something")
    }else {
      nameList.push({
        id: idName,
        name: nameDisplay.value,
        completed: false,
        date: new Date()
      });
      idName++;
      nameDisplay.value = "";
      // Update
      localStorage.setItem("nameList", JSON.stringify(nameList));
      functionList();
    }  
}

// Sort function
sortName.addEventListener("click", newSort)
function newSort(){
  event.preventDefault();
  nameList = nameList.sort((a,b)=>{
    if(a.name < b.name){
      return -1;
    }else{
      return 1;
    }
    return 0;
  })
  localStorage.setItem("nameList", JSON.stringify(nameList))
  functionList();
}

// Delete function
function deleteLine(){
  deleteName = [...document.querySelectorAll(".btn-close")];
  deleteName.forEach((data)=>{
    data.addEventListener("click",deleteFunction)
  })
}
function deleteFunction(){
  let firstName = deleteName.indexOf(event.target);
  nameList.splice(firstName,1);
  localStorage.setItem('nameList', JSON.stringify(nameList))
  functionList();
}

// command to control
function functionList(){
  
    list.innerHTML = "";
    nameList.forEach( (data)=>{
      if(data.completed === false){
        list.innerHTML += 
        `
        <div>
            <input type="checkbox" id="crossOut${data.id}" class="checkboxTrigger">${data.name}<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <input type="text" id="display1" placeholder="Enter you list:">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="edit-save${data.id}">Save changes</button>
                  </div>
                </div>
              </div>
            </div><button type="button" class="btn-close" id="close${data.id}"></button>
            </div>
        `
      }else{
        list.innerHTML += 
        `
        <div>
            <input type="checkbox" id="crossOut${data.id}" class="checkboxTrigger">${data.name}<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <input type="text" id="display1" placeholder="Enter you list:">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="edit-save${data.id}">Save changes</button>
                  </div>
                </div>
              </div>
            </div><button type="button" class="btn-close" id="close${data.id}"></button>
            </div>
        `
      }
    })
deleteLine();
}

functionList();