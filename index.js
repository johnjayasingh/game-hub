const express = require('express');
const cors = require('cors');
const app = new express();

app.use(cors());
app.all('*', (req, res) => {
  request(`http://${data.host}:${data.port}${req.originalUrl}`, {
    method: req.method
  }).pipe(res);
});


app.listen(8080, '0.0.0.0', () => {
  console.log("Started at 8080")
})
