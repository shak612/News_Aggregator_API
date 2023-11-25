const express = require('express');
const router = require('./routes/tasksRoutes');
const app = express();

//86112a48539e4ab29ff49cfa0af56aa5

const PORT = 3000;

app.use(express.json());

app.use('/api', router);

app.listen(PORT, (err) => {
    if(!err){
        console.log(`Server is running on port ${PORT}`)
    }else{
        console.log("error:-", err)
    }
})