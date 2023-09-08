const express = require('express');
const app = express();


app.use(express.json());

app.get("/api/", (req, res) => {
    res.json({
        "slack_name": req.query.slack_name,
        "current_day": new Intl.DateTimeFormat('en-us',{weekday:"long"}).format(new Date()),
        "utc_time": new Date().toISOString(),
        "track" : req.query.track,
        "github_file_url": "/",
        "github_repo_url": "/",
        "status_code": 200,

    })
});



app.listen(5100, ()=> {
    console.log('listening on port 5100');
  });