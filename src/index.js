const express= require('express')
const path= require('path')
const initHandlebars=require('./config/handlebar.js');
const initDB=require('./config/dataBase.js')
const router=require('./config/router.js')
const homePage=require('./controllers/homeController.js')

const app= express();
app.use(express.urlencoded({extended:true}))
initHandlebars(app);
initDB();
// set na papca views da ja tursi v SRC folder:
// app.set('views', path.resolve('./src/views'));
//  console.log(path.resolve('./src/views'))


// app.engine('hbs',handlebars({
//     extname:'hbs'
// }))
// app.set('view engine', 'hbs')


// app.all('/',(req, res)=>{
//     res.write('It/s work!');
//     res.end()
// })

app.use(express.static(path.resolve(__dirname,'./public')))
app.use(router)
// app.all('/', (req,res) =>{
//     res.render('index')
// })
// app.use (cubicHome)

app.listen(5000, ()=> console.log('Application is running on http://locallhost:5000'))