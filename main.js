var arrayForTasks = [];
var task = document.getElementById("taskText");
var taskId= 0;

var addTask = () => {
    taskId += 1;
    let paragraph = document.createElement("p");
    let buttonX = document.createElement("button");
    let buttonV = document.createElement("button");
    let div = document.createElement("div");
    let taskContent = document.createTextNode(task.value);
    paragraph.appendChild(taskContent);
    let element = document.getElementById("listItem");
    paragraph.setAttribute("id",`text${taskId}`)
    div.setAttribute("id",`container${taskId}`)
    div.setAttribute("class", "incomplete")
    element.appendChild(div)
    div.appendChild(paragraph);
    buttonX.setAttribute("onclick",`deleteTask(${taskId})`);
    buttonX.setAttribute("id",`buttonX${taskId}`);
    buttonX.setAttribute("class","xButton");
    div.appendChild(buttonX);
    buttonV.setAttribute("onclick",`complete(${taskId})`);
    buttonV.setAttribute("id",`buttonV${taskId}`);
    buttonV.setAttribute("class","vButton");
    div.appendChild(buttonV);
    arrayForTasks.push(task.value);
    task.value = "";
};
var complete = (idKey) => {
    let textToComplete = document.getElementById(`container${idKey}`);
    if(textToComplete.className == "incomplete"){
        textToComplete.setAttribute("class","complete")
    } else {textToComplete.setAttribute("class","incomplete")}
};

var deleteTask = (idKey) => {
    let textToRemove = document.getElementById(`text${idKey}`);
    let buttonVToRemove = document.getElementById(`buttonV${idKey}`);
    let buttonXToRemove = document.getElementById(`buttonX${idKey}`);
    let divToRemove = document.getElementById(`container${idKey}`)
    textToRemove.remove();
    buttonVToRemove.remove();
    buttonXToRemove.remove();
    divToRemove.remove();
};

var ok = (idGot) => {
    console.log(idGot);
};