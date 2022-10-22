const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/',(req,res)=>{
    res.send('Hello bubu form node!!!')
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.get('/categories',(req,res)=>{
    res.send(categories)
  })

  app.get('/category-news/:id',(req,res)=>{

    const id = req.params.id

    if(id==='08'){
      res.send(news)
    }
    else{

      const caregoryNews = news.filter(n=>n.category_id==id)
      res.send(caregoryNews)
    }

  })

  app.get('/news',(req,res)=>{
    res.send(news)
  })

  app.get('/news/:id',(req,res)=>{
    const id = req.params.id
    const selectedNews = news.find(n=>n._id===id)
    res.send(selectedNews)
  })