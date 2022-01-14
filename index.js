const { readdirSync, writeFileSync, statSync } = require("fs");
const { resolve } = require("path");

const folders = readdirSync(resolve(__dirname + "/shapez"));

let html = `<!DOCTYPE html>
<html lang="en">
    <link rel="stylesheet" href="styles.css">
    <body>
        <div class="header">Shrimp Mods</div>
        <table>
            <tr>
                <th class="header-name">Name Of The Mods</th>
                <th class="header-date">Last Modified Date</th>
            </tr>`;

// const blackList = ["index.js", "index.html", "styles.css"];
for (const d of folders) {
    // if (blackList.includes(d)) continue;
    const href = encodeURIComponent(d);
    const date = statSync(__dirname + "/shapez/" + d).mtime;
    const dateString = date.toISOString();

    const options = { dateStyle: "full", timeStyle: "long" };
    const readableDate = new Date(dateString).toLocaleString("en-US", options);

    html += `
            <tr>
                <td><a class="name" href="shapez/${href}/">${d}</a></td>
                <td><code class="date">${readableDate}</code></td>
            </tr>`;
}

html += `
        </table>
    </body>
</html>`;

writeFileSync(resolve(__dirname, "index.html"), html, "utf-8");
