const { readdirSync, writeFileSync, statSync } = require("fs");
const { resolve } = require("path");

const folders = readdirSync(resolve(__dirname));

let html = `<!DOCTYPE html>
<html lang="en">
    <link rel="stylesheet" href="styles.css">
    <body>
        <table>
            <tr>
                <th class="header-name">Name Of The Mods</th>
                <th class="header-date">Last Modified Date</th>
            </tr>`;

const blackList = ["index.js", "index.html", "styles.css"];
let names = "";
let dates = "";
for (const d of folders) {
    if (blackList.includes(d)) continue;
    const href = encodeURIComponent(d);
    const date = statSync(d).mtime;
    html += `       
            <tr>
                <th><a class="name" href="${href}/">${d}</a></th>
                <th><code class="date">${date.toISOString()}</code></th>
            </tr>`;
}

html += `
        </table>    
    </body>
</html>`;

writeFileSync(resolve(__dirname, "index.html"), html, "utf-8");
