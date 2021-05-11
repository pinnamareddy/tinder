import express from "express"
import mongoose from "mongoose"
import cors from "cors" 
import cards from "./dbcard.js"
//app configaration
const app = express();
const port = process.env.PORT||8002;
const connection_url=`mongodb+srv://admin:L5G4z1dkBOTbK9x5@cluster0.l8uzb.mongodb.net/tinderdb?retryWrites=true&w=majority`
//middlewares
app.use(express.json())
app.use(cors());
//dbconfig
mongoose.connect(connection_url,{
    useNewUrlParse: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
// api endpoint
app.get('/',(req,res)=>res.status(200).send("hello world"));
//post
app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    cards.create(dbCard,(err,data)=>{
        if(err){
            req.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});
app.get('/tinder/cards',(req,res)=>{
    cards.find((err,data)=>{
        if(err){
            req.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});
//app listner
app.listen(port,()=>(console.log(`listening to app at localhost:${port}`)))