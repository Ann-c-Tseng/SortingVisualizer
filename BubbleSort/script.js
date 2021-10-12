var container = document.getElementById("array");
  
// Function to generate the array of blocks
function generateArray() {
    for (var i = 0; i < 20; i++) {
  
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("block");
  
        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;
  
        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
  
        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

//Function to swap two bars
function swap(bar1, bar2) {
    return new Promise((resulve) => {
        //Exchange the transform style of the two bars
        var temp = bar1.style.transform;
        bar1.style.transform = bar2.style.transform;
        bar2.style.transform = temp;

        window.requestAnimationFrame(function() {
            //Wait for .25 seconds
            setTimeout(()=> {
                container.insertBefore(bar2, bar1);
                resolve();
            }, 250);
        });
    });
}