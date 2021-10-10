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

async function partition(l, r, delay = 700) {
  var blocks = document.querySelectorAll(".block");
  
  // Storing the value of pivot element
  var pivot = Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;
  blocks[r].style.backgroundColor = "red";
  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  for (var j = l; j <= r - 1; j++) {
    // To change background-color of the
    // blocks to be compared
    blocks[j].style.backgroundColor = "yellow";
    // To wait for 700 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = Number(blocks[j].childNodes[0].innerHTML);
  
    // To compare value of two blocks
    if (value < pivot) {
      i++;
      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[j].style.height;
      blocks[j].style.height = temp1;
      blocks[i].childNodes[0].innerText =
      blocks[j].childNodes[0].innerText;
      blocks[j].childNodes[0].innerText = temp2;
      blocks[i].style.backgroundColor = "orange";
      if (i != j) blocks[j].style.backgroundColor = "pink";
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else blocks[j].style.backgroundColor = "pink";
  }
  // Swapping the ith with pivot element
  i++;
  var temp1 = blocks[i].style.height;
  var temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[r].style.height;
  blocks[r].style.height = temp1;
  blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
  blocks[r].childNodes[0].innerText = temp2;
  blocks[r].style.backgroundColor = "pink";
  blocks[i].style.backgroundColor = "green";
  
  // To wait for 2100 milliseconds
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 3)
  );
  document.getElementsByClassName("range")[0].innerText = "";
  for (var k = 0; k < 20; k++) blocks[k].style.backgroundColor = "#6b5b95";
  return i;
}


//Async Quick Sort function
async function QuickSort(l, r, delay = 100) {
  if (l < r) {
    //Storing the index of pivot element after we partition
    var pivot_index = await partition(l, r);
    //Recursively call QS for left partition
    await QuickSort(l, pivot_index-1);
    //Recursively call QS for right partition
    await QuickSort(pivot_index + 1, r);
  }
}

// Call to generate the array
generatearray();

// Call to generate the indexes
generate_idx();

// Call to Quick Sort
QuickSort(0, 19);