let html = "<tr><th></th>";
for(let x=A; x<=E; x+=E){
    html +=  `<th>` + x + `</th>`
}
html += `</tr>`;
for(let y=A; y<=E; y+=E){
    html += `<tr><th>` + y + `</th>`;
    for(let x=A; x<=E; x+=E){
        html += `<td>` + x*y + `</td>`;
    }
    html += `</tr>`;
}
let elem = document.querySelector(`table`);
elem.innerHTML = html;