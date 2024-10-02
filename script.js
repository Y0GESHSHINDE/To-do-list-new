let listContainer = document.getElementsByClassName("TaskList")[0];
let inputdata= document.getElementById("userInput");

function addTask(){
   console.log("ok");
   if(inputdata.value === ''){
      alert("Add Your task")
   }else{
      let task = document.createElement("li");
      task.textContent = inputdata.value;
      console.log(task);
      listContainer.appendChild(task);      let span = document.createElement('span')
      span.textContent = "\u00d7"
      task.appendChild(span)
      span.style.right = '0px';
  }
  inputdata.value = '';
  saveData()
}

listContainer.addEventListener('click', (e)=>{
  if(e.target.tagName === 'LI'){
      e.target.classList.toggle("checked")
      saveData()
  }
  else if(e.target.tagName === 'SPAN'){
      e.target.parentElement.remove()
      saveData()
  }
})

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask()