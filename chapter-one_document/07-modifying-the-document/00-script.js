/* Solution to task 1 */


const ul = document.createElement("ul");


while (true) {
    let li = document.createElement("li");
    let fruits = prompt("Add a list of your favorite fruit: ", "");

    if (fruits === "" || fruits == null) {
	break;
    } else {
	li.append(fruits);
	ul.append(li);
	document.body.append(ul);
    }
}
