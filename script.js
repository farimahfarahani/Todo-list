const input = document.querySelector('#todo-input');

// Listening to click event from "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
    // value of the input field
    const inputData = input.value;
    input.value = "";
    // Check if the input is empty after trimming whitespace

    if (!inputData) {
        alert("Please enter a task."); // Alert the user if the input is empty
        document.querySelector("#myModal").attr('style', 'display:block;')
        return; // Exit the function early if the input is empty
    }


    // Check if the input contains any digits
    const regex = /\d/;
    if (regex.test(inputData)) {
        alert("Task cannot contain numbers."); // Alert the user if the input contains numbers
        return; // Exit the function early if the input contains numbers
    }

    // creating todo item element
    // const todo_el = document.createElement('div');
    // todo_el.classList.add('todo-item');

    // const parentElement = document.createElement('div');
    // todo_el.appendChild(parentElement);
    // const todo_content_ch = document.createElement('input');
    // todo_content_ch.classList.add('checkbox');
    // todo_content_ch.type = 'checkbox';
    // todo_content_ch.checked = true;
    // todo_content_ch.setAttribute('readonly', 'readonly');




    // const todo_content_el = document.createElement('div');
    // todo_el.appendChild(todo_content_el);

    // const todo_input_el = document.createElement('input');
    // todo_input_el.classList.add('checkbox');
    // todo_input_el.type = 'text';
    // todo_input_el.value = inputData;
    // todo_input_el.setAttribute('readonly', 'readonly');
    // todo_content_el.appendChild(todo_input_el);

    const todo_el = document.createElement('div');
    todo_el.classList.add('todo-item');

    // Assuming you want the checkbox within a specific container
    const todo_content_container = document.createElement('div');
    todo_el.appendChild(todo_content_container);

    const todo_content_ch = document.createElement('input');
    todo_content_ch.classList.add('checkbox'); // Ensure this class is correctly styled for checkboxes
    todo_content_ch.type = 'checkbox';
    todo_content_ch.checked = false;
    todo_content_ch.disabled = false; // Use disabled instead of readonly for checkboxes
    todo_content_container.appendChild(todo_content_ch); // Append to the intended container

    const todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text-input'); // Changed class name for clarity
    todo_input_el.type = 'text';
    todo_input_el.value = inputData; // Ensure inputData is defined
    todo_input_el.setAttribute('readonly', 'readonly');
    todo_content_container.appendChild(todo_input_el); // Append to the container
    todo_content_ch.style.marginRight = '10px';



    const todo_actions_el = document.createElement('div');
    todo_actions_el.classList.add('action-items');

    const todo_delete_el = document.createElement('i');
    todo_delete_el.classList.add('fa-solid');
    todo_delete_el.classList.add('fa-trash');

    todo_actions_el.appendChild(todo_delete_el);

    todo_el.appendChild(todo_actions_el);
    console.log(todo_el);

    // add the todo-item to lists
    document.querySelector('.todo-lists').appendChild(todo_el);


    // delete functionality
    todo_delete_el.addEventListener('click', (e) => {
        console.log(todo_el);
        document.querySelector('.todo-lists').removeChild(todo_el);
    });

});


