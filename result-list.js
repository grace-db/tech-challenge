var array1 = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm']
var array2 = ['Matt Johnson', 'Bart Paden', 'Jordan Heigle', 'Tyler Viles'];
var array3 = array1.concat(array2);
array3 = array3.filter((item,index)=>{
    return (array3.indexOf(item) == index)
})

function doClicked() {
    alert("JavaScript function has already been completed! :)");
}

function makeList() {
    let data = ['Matt Johnson', 'Bart Paden', 'Ryan Doss', 'Jared Malcolm', 'Jordan Heigle', 'Tyler Viles'];
    let list = document.getElementById("myList");
    data.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);;
    })
    done = doClicked;
    alert("JavaScript function has already been completed! :)");
}
var done = makeList;