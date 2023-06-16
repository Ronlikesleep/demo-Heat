const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const cors = require('cors');
const { Console } = require('console');
app.use(express.json());



app.post('/abcde', async (req, res) => {
  console.log("accessing!");
  const filePath = path.resolve(__dirname, "data", "oladipo.json");
  let fileData  = "";
  const dataTarget = req.body;
  
  await fs.readFile(filePath, 'utf8').then(data => {
    //console.log(data);
    data = JSON.parse(data);
    fileData = data;
  });
  
  let newIndex = 0;

  if (fileData && fileData.scoutingReports) {
    if (fileData.scoutingReports.length > 0) {
      const lastReportIndex = fileData.scoutingReports.length;
      newIndex = lastReportIndex;
    }
  } else {
    console.error('fileData or fileData.scoutingReports is undefined');
  }
  

  const newReport = {
    index: newIndex,
    id: `${new Date().toISOString().slice(0,10)}_Sample Report`,
    date: new Date().toISOString(),
    scout: dataTarget.scout,
    dxId: '6514',
    player: dataTarget.player,
    event: dataTarget.event,
    report: dataTarget.report,
    team: dataTarget.team
  };
  fileData.scoutingReports.push(newReport);

  await fs.writeFile(filePath, JSON.stringify(fileData, null, 2));

  res.send("hello world");
})

port = 3005

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
