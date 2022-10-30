const express = require('express')

const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(
      {
        slackUsername: "George Anku-Mensah",
        backend: true,
        age: 20,
        bio: "George is a full-stack web developer,who believes he can fix the world using technology.",
      },
    );
});

app.listen(3000, () =>
console.log(`listening on port ${port}`))