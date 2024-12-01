/* Solution to Task 2*/

let elem = document.querySelectorAll('li');

for (let foo of elem) {
    let childNodes = foo.firstElementChild;
    let bar = childNodes.getAttribute('href');

    if (bar.includes('://') && !bar.includes('http://internal.com/test')) {
	childNodes.style.color = 'yellow';
    }
}
