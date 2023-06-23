const message = document.querySelector(".message");


// Check if dark mode is already enabled (using localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  //remove dark mode onload
  window.onload = function() {
    document.body.classList.remove('dark-mode');
    message.classList.remove('active');
  };
  
  
  // Handle the form-switch toggle
  document.getElementById('darkSwitch').addEventListener('change', function() {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  
  // Function to enable dark mode
  function enableDarkMode() {
    document.body.classList.add('dark-mode');

    
    message.classList.add('active');
    setTimeout(function(){
      message.classList.remove('active')
    }, 2000)
    localStorage.setItem('darkMode', 'enabled');
  }
  
  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
  
  var saveChangesBtn = document.getElementById('saveChangesBtn');
  var spinner = document.getElementById('spinner');

  saveChangesBtn.addEventListener('click', function() {
    // Show the spinner
    spinner.classList.remove('d-none');

    // Simulate an asynchronous operation
    setTimeout(function() {
      // Hide the spinner
      spinner.classList.add('d-none');

      // Perform the desired action after the spinner is hidden
      // For example, you can submit a form or make an API request
      console.log('Save changes button clicked');
    }, 2000); // Simulate a 2-second delay
  });