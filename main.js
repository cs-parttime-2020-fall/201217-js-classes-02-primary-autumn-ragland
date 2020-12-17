console.log("20 12 17 JS Classes 02 Primary"); // check that files are linked

// Create a class `GitHubRepo` with properties user name, repository name, repository description, and files. 
class GitHubRepo {
    // The user name, repository name, and description can be set when an instance of this class is created 
    constructor(userName, repoName, description) {
        this.userName = userName;
        this.repoName = repoName;
        this.description = description;
        // all `GutHubRepo` objects should start with an empty array for the files property.
        this.files = [];
    }
    // Update description will accept a new description and update the value of a `GitHubRepo` object to the value passed in. 
    updateDescription(newDesc) {
        this.description = newDesc;
    }

    // Add file will accept a file name and file type. If the file type is js, html, or css a file object with properties name and type will be added to the file array property. If an invalid file type is passed alert the message : This file cannot be added.
    addFile(fileName, fileType) {
        if (fileType == "js" || fileType == "html" || fileType == "css") {
            this.files.push({ name: fileName, type: fileType });
        } else {
            alert(`${fileName} cannot be added`);
        }
    }

    // View repository info will output a  `GitHubRepo` object's properties and iterate through the list of files.
    viewRepoInfo(){
        console.log(`${this.userName}'s ${this.repoName} Repository\n---\n${this.description}\n---\nNumber of Files : ${this.files.length}`);
        for(let i = 0; i < this.files.length; i++){
            console.log(`File Name : ${this.files[i].name}\nFile Type : ${this.files[i].type}`);
        }
    }
}
// Create an instance of the `GitHubRepo` class passing in a user name and a repository name. 
let sampleRepo = new GitHubRepo("autumn-ragland", "classes 02 primary");
// console.log(sampleRepo);

// Prompt the user to enter a repository description and use the correct class method to set the value of the `GitHubRepo` object's description property.
sampleRepo.updateDescription(prompt("Enter a description for your repo!"));
// console.log(sampleRepo);

// // simple test of add file
// sampleRepo.addFile("test", "html");
// console.log(sampleRepo.files);

// Prompt the user to confirm if they would like to add a file to the repository.
let willAddFile = confirm("Do you want to add a file to the repo?");
// Continue asking the user to confirm if they would like to add a file until they choose cancel.
while(willAddFile){
    // If they choose okay prompt them for a file name and for a file type. 
    let fileName = prompt("File name");
    let fileType = prompt("File Type. Please only add js, html, or css file types");
    // Use the correct class method to add an element to the file array property using the returned value from both prompts. 
    sampleRepo.addFile(fileName, fileType);
    // update value evaluated in condition
    willAddFile = confirm("Do you want to add another file to the repo?");
}

// Output the `GitHubRepo` object's properties using the correct class method.
sampleRepo.viewRepoInfo();