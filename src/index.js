const express=require('express')

const app= express();

app.all('/',(req, res)=>{
    res.write('It/s work!');
    res.end()
})

app.listen(5000, ()=> console.log('Application is running on http://locallhost:5000'))