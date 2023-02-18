 

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


app.get('/', async (req, res) => {
    
    res.send('job portal side is running');
});

app.listen(port, () => {
    
    console.log(`job portal server running on port ${port}`);
})