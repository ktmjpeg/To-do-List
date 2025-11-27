const todolist=[
];
rendertodo();
function rendertodo(){
    let totalhtmlgen='';
    for(let i=0;i<todolist.length;i++){
        const todo=todolist[i];
        const {name,date}=todo;
        let todogen=`
        <div>${name}</div>
        <div>${date}</div>
        <button onclick="todolist.splice(${i},1);
        rendertodo();"class="button1"
        >delete 
        </button>
        `
        totalhtmlgen=totalhtmlgen+todogen;
        
    }
    document.querySelector('.todo-content-js').innerHTML=totalhtmlgen;

}

function gettodo(){
    const getname=document.querySelector('.name-js');
    const name=getname.value;
    const getdate=document.querySelector('.date-js');
    const date=getdate.value;
    todolist.push({name,date});
    getname.value='';
    getdate.value='';
    rendertodo();
}


