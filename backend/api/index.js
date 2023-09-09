const express = require('express');
const app = express();


app.use(express.json());

app.get("/api/", (req, res) => {
    res.json({
        "slack_name": req.query.slack_name,
        "current_day": new Intl.DateTimeFormat('en-us',{weekday:"long"}).format(new Date()),
        "utc_time": new Date().toISOString().slice(0,19) + "Z",
        "track" : req.query.track,
        "github_file_url": "https://github.com/Wilsonide/hngRepo/blob/master/backend/api/index.js",
        "github_repo_url": "https://github.com/Wilsonide/hngRepo",
        "status_code": 200,

    })
});



app.listen(5100, ()=> {
    console.log('listening on port 5100');
  });

  module.exports = app;