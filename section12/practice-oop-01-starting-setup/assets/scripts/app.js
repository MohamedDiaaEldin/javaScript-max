

function readList(type, finished){
    list = []
    for (const listItem of document.querySelectorAll(`#${type}-projects li`)){
        const projectItem = new ProjectItem(listItem,finished)
        list.push(projectItem)        
        listItem.addEventListener('click', projectItem.switch)
    }
    return list
}
class ProjectItem{
    constructor(listItem, finished){
        this.listItem = listItem
        this.finished = finished        
    } 
    switch = ()=>{
        if (this.finished){
            // move from finished to active 
            console.log('move from finished to active ')
            for (const projectItem of finishedList){
                if(projectItem.listItem.id === this.listItem.id){
                    // get parent 
                    // remove from finshed parent 
                    // add to active parent 
                    const parentList = projectItem.listItem.parentElement
                    parentList.removeChild(projectItem.listItem)

                    console.log(parentList)
                }


            }
        }

    }
    render = (from, to)=>{

    }
}


const activeList = readList('active', false)

const finishedList = readList('finished', true)
