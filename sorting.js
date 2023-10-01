let arr = [50, 45, 12, 22, 34, 78, 59, 100];
let parentDiv = document.getElementsByClassName("parentDiv");

let bubble = document.getElementsByClassName("strbutton");

let i = 0;
arr.forEach(e => {
    let innerdiv = document.createElement('div');
    innerdiv.style.width = "30px";
    innerdiv.style.margin = "2px";
    innerdiv.style.height = (e * 6 + 'px');
    innerdiv.style.zIndex = 2;
    
    let b = innerdiv.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 1).toString(16)
   
      innerdiv.setAttribute("id", "elem" + i);
    i++;
    innerdiv.classList.add("innerDiv")
    parentDiv[0].appendChild(innerdiv)
})

bubble[0].addEventListener("click", () => BubbleSort(arr))
 
const sleep = (time) => {
    return new Promise(resolve=> setTimeout(resolve,time))
}

async function BubbleSort(arr) {
    
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < (arr.length - i - 1); j++) {
            await sleep(500);
            if (arr[j] > arr[j + 1]) {

                swapNumber(arr, j)
                swapColorHeight(j)
                
            }
        }          
    }
}

function swapNumber(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j+1]=temp
}

function swapColorHeight(j) {
    let a = 'elem' + j;
    let b = "elem" + (j + 1);
    let e1 = document.getElementById(a);

    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;

    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = bg2;
    
    e2.style.backgroundColor = bg1;
    e1.style.height = h2 + "px";
     e2.style.height = h1 + "px";

}