# 20 12 17 JS Classes 02 Primary
HTML and JS files have been included in the repository. Add comments throughout your solution. Comment out any broken code before 9PM submission and provide context on what's not working. Be sure to push after 

## GitHub Repositories 
Create a class `GitHubRepo` with properties user name, repository name, repository description, and files. The user name, repository name, and description can be set when an instance of this class is created but all `GutHubRepo` objects should start with an empty array for the files property.

The class will have three methods : `updateDescription`,`addFile`, and `viewRepoInfo`. 

Update description will accept a new description and update the value of a `GitHubRepo` object to the value passed in. 

Add file will accept a file name and file type. If the file type is js, html, or css a file object with properties name and type will be added to the file array property. If an invalid file type is passed alert the message : This file cannot be added.

View repository info will output a  `GitHubRepo` object's properties and iterate through the list of files. The output should look something like this
```
Autumn-Ragland's JS Classes 02 Repository
----
Sample with JS
----
Number of Files : 4
File Name : index
File Type : html
File Name : main
File Type : js
File Name : style
File Type : css
File Name : about
File Type : js
```

Create an instance of the `GitHubRepo` class passing in a user name and a repository name. Prompt the user to enter a repository description and use the correct class method to set the value of the `GitHubRepo` object's description property.

Prompt the user to confirm if they would like to add a file to the repository. If they choose okay prompt them for a file name and for a file type. Use the correct class method to add an element to the file array property using the returned value from both prompts. Continue asking the user to confirm if they would like to add a file until they choose cancel. 

Output the `GitHubRepo` object's properties using the correct class method. 
