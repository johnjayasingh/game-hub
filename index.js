const express = require('express');
const app = new express();

app.use(express.static('dist'))


//Server Starts
app.listen(8081, "0.0.0.0", () => {
  console.log("Server Started at Port 8081");
});
