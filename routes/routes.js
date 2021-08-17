const { exec } = require("child_process");
// Router
const router = app => {
    app.post('/CD-Event', (request, response) => {
        exec("ls -la", (error, stdout, stderr) => {
            if (error) {
                response.send({
                    message: `error: ${error.message}`
                });
                return;
            }
            if (stderr) {
                response.send({
                    message: `stderr: ${stderr}`
                });
                return;
            }
            response.send({
                message: `stdout: ${stdout}`
            });
        });
    });


}

// Export the router
module.exports = router;
