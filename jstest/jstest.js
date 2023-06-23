let html = "<tr><th></th>";
for(let A; E;){
    html +=  `<th>``</th>`
}
html += `</tr>`;
for(let A; E;){
    html += `<tr><th>``</th>`;
    for(let A; E;){
        html += `<td>``</td>`;
    }
    html += `</tr>`;
}
let elem = document.querySelector(`table`);
elem.innerHTML = html;