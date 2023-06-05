// add
const addName = document.querySelector("#press1")
// sort
const sortName = document.querySelector("#press2")
// display input
const nameDisplay = document.querySelector("#display1")
// list
const output = document.querySelector("#list")
// info
let nameList = []

addName.addEventListener("click", (e)=>{
    e.preventDefault()
    if(nameDisplay.value){
        nameList.push(nameDisplay.value);
        nameDisplay.value = ""
    }else {
     alert("you need to add something")
    }
    nameDisplay.value = ""

      // Update
      localStorage.setItem("names", JSON.stringify(nameList))
})

addName.addEventListener("click", ()=>{
    output.innerHTML = ""
    nameList = JSON.parse(localStorage.getItem("names"))
    nameList.forEach( (data)=> {
        output.innerHTML += `
            <li class="space"><input type="checkbox" id="crossOut">${data}<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            
            <!-- Modal -->
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
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div><button type="button" class="btn-close close"></button></li>
        `
    })
})