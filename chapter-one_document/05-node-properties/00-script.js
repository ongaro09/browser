/* Solution to Task 1 */

let elements = document.querySelectorAll("li");

for (elem of elements) {
    let elemName = elem.firstChild.textContent;
    let count = elem.getElementsByTagName("li").length;

    console.log(`${elemName.trim()}: ${count}`);
}
