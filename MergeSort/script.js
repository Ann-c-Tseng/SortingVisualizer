// Canvas variables
var canvas, canvaswidth, canvasheight, ctrl;
 
// Call canvasElements() to store height/width
// in above canvas variables
canvasElements();
 
// Below are 3 arrays:
//1) arr is for storing array element
//2) intermediate for storing intermediate values
//3) visited is for element which has been sorted
var arr = [], intermediate = [], visited = [];
 
 
// Length of given unsorted array
var arr_length = 20;
 
// Store random value between 1 and 100 (ends inclusive) in arr[]
for (var i = 0; i < arr_length; i++) {
    arr.push(Math.ceil(Math.random() * 100));
}
 
// Initialize itmd and visited array with 0
for (var i = 0; i < arr_length; i++) {
    intermediate.push(0);
    visited.push(0);
}

// Merging of two sub array
function mergeArray(start, end) {
    let mid = parseInt((start + end) >> 1);
    let start1 = start, start2 = mid + 1;
    let end1 = mid, end2 = end;
     
    // Initial index of merged subarray
    let index = start;
 
    //Exit while loop if one or both of the arrays become empty
    while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
            intermediate[index] = arr[start1];
            index = index + 1;
            start1 = start1 + 1;
        }
        else if(arr[start1] > arr[start2]) {
            intermediate[index] = arr[start2];
            index = index + 1;
            start2 = start2 + 1;
        }
    }
 
    // Copy the remaining elements of
    // arr[], if there are any
    while (start1 <= end1) {
        intermediate[index] = arr[start1];
        index = index + 1;
        start1 = start1 + 1;
    }
 
    while (start2 <= end2) {
        intermediate[index] = arr[start2];
        index = index + 1;
        start2 = start2 + 1;
    }
 
    index = start
    while (index <= end) {
        arr[index] = intermediate[index];
        index++;
    }
}
 
// Function for showing visualization
// effect
function drawBars(start, end) {
 
    // Clear previous unsorted bars
    ctrl.clearRect(0, 0, 1000, 1500);
 
    // Styling of bars
    for (let i = 0; i < arr_length; i++) {
 
        // Changing styles of bars
        ctrl.fillStyle = "#6b5b95";   
         
        // Size of rectangle of bars
        ctrl.fillRect(30 * i, 0, 28, arr[i]*3);

        
        if (visited[i]) {
            ctrl.fillStyle = "green";
            ctrl.fillRect(30 * i, 0, 28, arr[i]*3);
        }
    }
 
    for (let i = start; i <= end; i++) {
        ctrl.fillStyle = "yellow";
        ctrl.fillRect(30 * i, 0, 28, arr[i]*3);
        visited[i] = 1
    }
}
 
//Wait time
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
 
// Merge Sorting
const mergeSort = async (start, end) => {
    if (start < end) {
        let mid = parseInt((start + end) >> 1);
        await mergeSort(start, mid);
        await mergeSort(mid + 1, end);
        await mergeArray(start, end);
        await drawBars(start, end);
 
        // Waiting time is 800ms
        await timeout(800);
    }
}
 
// canvasElements function for storing
// width and height in canvas variable
function canvasElements() {
    canvas = document.getElementById("Canvas");
    canvas.width = canvas.height = 1000;
    canvaswidth = canvas.width;
    canvasheight = canvas.height;
    ctrl = canvas.getContext("2d");
}

function returnToPurple() {
    // Waiting time is 800ms
    timeout(800);

    for (let i = 0; i < arr_length; i++) {
        // Changing styles of bars
        ctrl.fillStyle = "#6b5b95";
        // Size of rectangle of bars
        ctrl.fillRect(30 * i, 0, 28, arr[i]*3);
    }
}
 
// Async Merge Sort function
const start = async () => {
    await mergeSort(0, arr_length - 1);
    await drawBars();
    await returnToPurple();
}

start();