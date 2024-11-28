// Sidebar toggle
//const sidebar = document.getElementById('sidebar');
//const openBtn = document.getElementById('open-btn');
//const closeBtn = document.getElementById('close-btn');
//
//openBtn.addEventListener('click', () => {
//  sidebar.classList.add('open');
//});
//
//closeBtn.addEventListener('click', () => {
//  sidebar.classList.remove('open');
//});

// Submenu toggle
//const menuButtons = document.querySelectorAll('.menu-btn');
//
//menuButtons.forEach((button) => {
//  button.addEventListener('click', () => {
//    const parent = button.parentElement;
//    const submenu = parent.querySelector('.submenu');

    // Toggle open class
    //parent.classList.toggle('open');

    // Show/hide submenu
//    submenu.style.display = parent.classList.contains('open') ? 'block' : 'none';
//  });
//});


// Function to search the content on the page
function searchContent() {
  // Get the search input value
  const query = document.getElementById('search-input').value.toLowerCase();
  
  // Get all content items
  const items = document.querySelectorAll('.content-item');

  // Loop through each content item
  items.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    const contentText = item.querySelector('p').textContent.toLowerCase();
    
    // Check if the search query matches the title or the content
    if (title.includes(query) || contentText.includes(query)) {
      item.classList.remove('hidden'); // Show item
    } else {
      item.classList.add('hidden'); // Hide item
    }
  });

  // Prevent form submission (page reload)
  return false;
}

// Function to handle file selection
function handleFileSelect() {
  var fileInput = document.getElementById("file-upload");
  var fileName = fileInput.files[0] ? fileInput.files[0].name : "No file selected";

  // Display the selected file's name
  document.getElementById("file-name").innerText = "Selected file: " + fileName;
}

// Function to simulate scanning the file
function scanFile() {
  const fileInput = document.getElementById("file-upload");
  const file = fileInput.files[0];

  // If no file is selected, show a message
  if (!file) {
    document.getElementById("scan-result").innerText = "Please upload a file to scan.";
    return;
  }

  // Simulating file scanning (basic checks)
  let scanMessage = "File scanned successfully. ";

  // Example of simple validation: Check file type and size
  if (!["image/png", "image/jpeg", "application/pdf"].includes(file.type)) {
    scanMessage += "Warning: Unsupported file type!";
  } else if (file.size > 5 * 1024 * 1024) { // 5MB limit
    scanMessage += "Warning: File is too large (max 5MB).";
  } else {
    scanMessage += "File is valid.";
  }

  // Display the scan result
  document.getElementById("scan-result").innerText = scanMessage;
}
