const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

app.use(express.json());

app.post('/Oladipo', async (req, res) => {
  try {
    const data = req.body;

    
    const filePath = '/Users/zhangshanrong/Desktop/mavericks-roster-demo/src/data/oladipo.json';
    const fileData = await fs.readFile(filePath);
    let jsonData = JSON.parse(fileData);
    let reports = jsonData.scoutingReports;

    const newIndex = reports.length > 0 ? reports[0].index + 1 : 0;
    console.log(newIndex);
    const newReport = {
      index: newIndex,
      id: `${new Date().toISOString().slice(0,10)}_Sample Report`,
      date: new Date().toISOString(),
      scout: data.scout,
      dxId: '6514',
      player: data.player,
      event: data.event,
      report: data.report,
      team: data.team
    };

    
    reports.unshift(newReport);

    
    await fs.writeFile(filePath, JSON.stringify(jsonData));

    res.sendStatus(200);
  } catch (error) {
    console.error('Error handling /report request:', error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
