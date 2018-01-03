function  dofirst() {
	var button=document.getElementById("button" );

	button.addEventListener("click",save,false);

	display();
	var t=document.getElementsByClassName('deleted');
t.onclick=function()
{
	window.localStorage.clear();
	display();
};


	
	
}

function save()
{
	 one=document.getElementById("one" ).value;//contents inside textbox one
	 two=document.getElementById("two" ).value;
	if(one+two=="")

{
	alert("empty field");
}
	localStorage.setItem(one,two);

	display();
	
	document.getElementById("one" ).value="";
	document.getElementById("two" ).value="";

}
function display()
{
var downbox=document.getElementById('incomplete-task');
downbox.innerHTML="";
for(var x=0;x<localStorage.length;x++){
 a=localStorage.key(x);
 b=localStorage.getItem(a);
var li=document.createElement("li");
 inputone=document.createTextNode(a );
 inputtwo=document.createTextNode(b);
 span=document.createElement("span");
 //button=document.createElement("button");
 checkbox=document.createElement("input");
checkbox.type="checkbox";
//button.className="deleted";
//button.innerText="Delete";
//span.className="button";
//span.appendChild(button);
li.append(checkbox);
li.appendChild(inputone);

li.appendChild(inputtwo);
li.appendChild(span);

downbox.appendChild(li);	


//downbox.innerHTML+=a+b+document.createElement("button");
}
}
window.addEventListener("load",dofirst,false);



/*
var taskinput=document.getElementById("newtask");//new task
var addButton=document.getElementsByTagName("button")[0]//first button
var incompleteTaskHolder=document.getElementById("incomplete-task");
//incomplete-task
var completedTasksHoder=document.getElementById("completed-task");
//completed-task

//new task list
var createNewTaskElement=function(taskString)
{
	//create list item
	var listItem=document.createElement("li");
	//input checkbox
	var checkbox=document.createElement("input");
	var label=document.createElement("label");//label
	var editinput=document.createElement("input");//text
	var editbutton=document.createElement("button");
	var deletebutton=document.createElement("button");
	//each element needs modification
	checkbox.type="checkbox";
	editinput.type="text";

	editbutton.innerText="Edit";
	editbutton.className="edit";
	deletebutton.innerText="Delete";
	deletebutton.className="delete";

	label.innerText=taskString;
	//each element needs appending
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editinput);
	listItem.appendChild(editbutton);
	listItem.appendChild(deletebutton);
	return listItem;
}
//add a task
var addTask=function()
{
	console.log("add task....");
	//create a new list item with text from newtask
	var listItem=createNewTaskElement(taskinput.value);
	// append list item to incompletetask
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
	taskinput.value="";
}
//edit an existing task


//delete an existing task
var deleteTask=function()
{
	console.log("Delete task........");
	var listItem=this.parentNode;
	var ul=listItem.parentNode;
	//removing the parent list from ul
	ul.removeChild(listItem);
}
//mark task as completed-task
var taskCompleted=function()
{
	console.log("task complete.....");
	//append the task lst to completed list
	var listItem=this.parentNode;
	completedTasksHoder.appendChild(listItem);
	bindTaskEvents(listItem,taskIncompleted);
	//mark as incomplete


	//var bindTaskEvents=function(taskListItem,checkBoxEventHandler);
	console.log("bind list items..");
	//select tasklistitem's children
	var checkbox=tasklistitem.querySelector("input[type=checkbox]");
	//var editbutton=tasklistitem.querySelector("button.edit");
	var deletebutton=tasklistitem.querySelector("button.delete");

	//bind editask to edit button

	//nind delete task to delete button
	deletebutton.onclick=deleteTask;
	checkbox.onchange=checkBoxEventHandler; 
}
var ajaxRequest=function()
{
	console.log("ajaxRequest.....");
}
//set the click handler to add task function
//addButton.addEventListener('onclick',addTask,false);
//addButton.addEventListener("click",ajaxRequest);
//printing all incomplete tasks ul
/*{
	bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}
//printing all completed taskString
for(var i=0;i<completedTasksHoder.children.length;i++)
{
	bindTaskEvents(completedTasksHoder.children[i],taskIncompleted);
}*/


