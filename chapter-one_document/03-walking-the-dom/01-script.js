/* A code to paint the diagonal elements of a table */

let elem = document.body.children[0].firstElementChild;
let rows = elem.rows;

for (let i = 0; i < rows.length; i++) {
    let cell = rows[i].cells[i];
    cell.style.background = "red";
}


