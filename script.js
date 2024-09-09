const http = require('http');
const fs = require('fs');
const port = 8809;

function requestHeandle(req, res) {

    let fileName = "";
    switch (req.url) {
        case "/":
            fileName = "todoList.html";
            break;
        case "/calculator":
            fileName = "calculator.html";
            break;

        case "/quickQuiz":
            fileName = "quickQuiz.html";
            break;

        default:
            fileName = "error.html";
    }

    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result)
        }
    })
}

const server = http.createServer(requestHeandle)
server.listen(port, (err) => {
    if (err) {
        console.log("server not found");
        return false;
    }
        console.log("server is found http://localhost:" + port);
})
