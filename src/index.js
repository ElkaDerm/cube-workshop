const express=require('express')
const handlebars= require ('express-handlebars')
const path=require('path')
const app= express();

// set na papca views da ja tursi v SRC folder:
app.set('views', path.resolve('./src/views'));
//  console.log(path.resolve('./src/views'))


app.engine('hbs',handlebars({
    extname:'hbs'
}))
app.set('view engine', 'hbs')


// app.all('/',(req, res)=>{
//     res.write('It/s work!');
//     res.end()
// })

app.all('/', (req,res) =>{
    res.render('index')
})

app.listen(5000, ()=> console.log('Application is running on http://locallhost:5000'))