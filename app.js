
const express=require('express');
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const categories=require('./routes/categories');
const app=express();
//work as a middleware
app.use(bodyParser.json());
//mongoose.connect
mongoose.connect('mongodb+srv://Anshika_3012:Anshika%403012@cluster0.rrcc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    {
        //useNewurlParser:true,
      
    }
)
.then(()=>console.log('mongoDb contted'))
.catch(err=>console.log(err));

//routes



app.use('/api/categories',categories);
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server conected on part ${PORT}`))
