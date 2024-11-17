// Array to store the open files' contents or data
const openFiles = [];

let currentTabIndex = -1;

// Function to create a new tab
function createTab(fileName, content) {
  const tabBar = document.getElementById("tabBar");
  const contentArea = document.getElementById("contentArea");

  // Create a new tab element
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.innerText = fileName;

  // When the tab is clicked, switch to that tab
  tab.addEventListener("click", () => {
    setActiveTab(tab);
  });

  tabBar.appendChild(tab);

  // Create a new content container for this tab
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("tab-content");
  contentDiv.style.display = "none";  // Initially hidden
  contentDiv.innerHTML = content;    // Insert file content

  contentArea.appendChild(contentDiv);

  // Save the file content and tab reference in the openFiles array
  openFiles.push({ fileName, contentDiv, tab });

  // If this is the first tab, set it as the active one
  if (currentTabIndex === -1) {
    setActiveTab(tab);
  }

  return tab;
}

// Function to set a tab as active
function setActiveTab(tab) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  // Deactivate the current tab
  tabs.forEach(t => t.classList.remove("active"));
  contents.forEach(c => c.style.display = "none");

  // Activate the clicked tab
  tab.classList.add("active");

  // Show the corresponding content
  const contentDiv = openFiles.find(f => f.tab === tab).contentDiv;
  contentDiv.style.display = "block";

  // Update currentTabIndex
  currentTabIndex = openFiles.findIndex(f => f.tab === tab);
}

// Example usage: Add a new file when a button is clicked (or on a file open event)
function openFile(fileName, content) {
  createTab(fileName, content);
}

// For example, opening files
const openFileBtn = document.getElementById('open-file-btn');
openFile("ExampleFile1.txt", "This is the content of example file 1");
openFile("ExampleFile2.txt", "This is the other content of example file 2");
openFile("ExampleFile3.txt", "This is the more content from example file 3");

