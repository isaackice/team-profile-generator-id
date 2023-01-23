function generateHTML(teamMembers) {

    // for loop to go through the teamMembers array and get the appropriate HTML text with the getHTML function for each member
    let membersHTML = ``
    for (let member of teamMembers) {
        membersHTML += member.getHTML()
    }

    // the HTML text with the necessary adjustments from membersHTML
    const htmlInfo =
        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        </head>
        
        <body>
            <header>
                <h1>Team Profile</h1>
            </header>
            <section class="row row-cols-1 row-cols-md-3 g-4">
            ${membersHTML}
            </section>
            <script src="./index.js"></script>
        </body>
        </html>
    `

    return htmlInfo
}

module.exports = generateHTML;