//npm init
//npm install express
//npm install ejs
//npm install nodemon

const app= require('./server')
const noticias= require('./mockup')

//criando a primeira rota
app.get('/',(req,res) =>{
    res.render('home/index',{noticias: noticias.slice(0,3),title:'Home'})
})

app.get('/noticia', (req,res) => {
    var id= req.query.id
    res.render('noticias/noticia',{noticia:noticias[id], title:'Notícia'})
})

app.get('/noticias',(req,res) =>{
    res.render('noticias/noticias',{noticias:noticias,title:'Notícias'})
})

app.get('/admin',(req,res) =>{
    //res.render('admin/form_add_noticia')
    res.render('admin/login',{title:'Admin'})
})

//iniciando o servidor
app.listen(3000,()=>{
    console.log('Servidor n porta 3000 com Express')
    console.log('Pressione CTR+C para encerrar o servidor')
})