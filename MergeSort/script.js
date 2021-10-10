
var container = document.getElementById("array");

// Generating the array of blocks
function generatearray() {
  for(var i = 0; i < 20; i++) {
    //Get a value between 1 and 100 (1 & 100 inclusive)
    var value = Math.ceil(Math.random() * 100);

    //Make an array element div
    var array_ele = document.createElement("div");

    //Adding the class 'block' to div
    array_ele.classList.add("block");

    //Adding height + transform style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i*30}px)`;

    //Create label element for displaying a block's size
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    //Add the created elements to our html file.
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

// Function to generate indexes
var count_container = document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 20; i++) {
    //Make an array element div again
    var array_ele2 = document.createElement("div");

    //Adding the class 'block2' to div
    array_ele2.classList.add("block2");

    //Adding height + transform style to div
    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;

    //Adding indexes
    var array_ele_label2 = document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = i;

    //Appending create elements to index.html
    array_ele2.appendChild(array_ele_label2);
    count_container.appendChild(array_ele2);
    
  }
}

function merge(left, right) {
  let arr = []
  // Leave loop if any one of the array gets empty
  while (left.length && right.length) {
      var leftV = Number(left[0].childNodes[0].innerText);
      var rightV = Number(right[0].childNodes[0].innerText);

      // Pick the smaller among the smallest element of left and right sub arrays 
      if (leftV < rightV) {
          arr.push(left.shift());
      } else {
          arr.push(right.shift());
      }
  }
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  var concatinated = [ ...arr, ...left, ...right ];
  return concatinated;
}

function MergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array;
  }
  
  const left = array.splice(0, half)
  return merge(MergeSort(left), MergeSort(array))
}

// Call to generate the array
generatearray();

// Call to generate the indexes
generate_idx();

var result = MergeSort(Array.from(document.querySelectorAll(".block")));
