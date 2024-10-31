
const express = require('express');
const db = require('./database/database');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');


app.use(cors());

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const data = await db.select().from('People');
    res.json(data);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/api/data`);
});
