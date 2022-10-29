const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send([
      {
        slackUsername: "George Anku-Mensah",
        backend: true,
        age: 20,
        bio: "George is a full-stack web developer,who believe he can fix the world using technology.",
      },
    ]);
});

app.listen(3000, () =>
console.log('listening on port 3000'))