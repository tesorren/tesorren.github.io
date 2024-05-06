const c_width = parseFloat(prompt("Enter a width of a rectangle"));
const c_height = parseFloat(prompt("Enter a height of a rectangle"));
const c_area = parseFloat(c_width*c_height);
const html3 =   `<p>Width: ${c_width}</p>
                <p>Height: ${c_height}</p>
                <p>Area: ${c_area.toFixed(3)}</p>`;
document.write(html3);