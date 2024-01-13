import express from "express";
import bp from "body-parser";
import axios from "axios";
import {dirname} from "path";
import {fileURLToPath} from "url";


const port=3000;
const app=express();
const aio="http://www.themealdb.com/api/json/v1/1/"

const dir=dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bp.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    res.render(`${dir}/views/index.ejs`);

})

app.post("/random",ram);
app.post("/name",namef);
app.post("/fl",fl);
app.post("/cat",cat);
app.post("/ing",ing);
app.post("/area",area);


app.listen(port,()=>{

    console.log("Server Running On PORT:"+port);

})

async function ram(req,res)
{

    try {

        const result=await axios.get(aio+"random.php");
        const mydata=result.data;

        console.log(mydata);
        
    } catch (error) {
        
        res.status(500);

    }

}

async function namef(req,res)
{

    try {
        var n=req.body.t1;
        const result=await axios.get(aio+"search.php?s="+n)      

        const mydata=result.data;
        console.log(mydata);

    } catch (error) {
        
    }

}

async function cat(req,res)
{

    try {
        var n=req.body.sc;
        const result=await axios.get(aio+"filter.php?c="+n)      

        const mydata=result.data;
        console.log(mydata);

    } catch (error) {
        
    }

}

async function ing(req,res)
{

    try {
        var n=req.body.sc;
        const result=await axios.get(aio+"filter.php?i="+n)      

        const mydata=result.data;
        console.log(mydata);

    } catch (error) {
        
    }

}

async function area(req,res)
{

    try {
        var n=req.body.sc;
        const result=await axios.get(aio+"filter.php?a="+n)      

        const mydata=result.data;
        console.log(mydata);

    } catch (error) {
        
    }

}

async function fl(req,res)
{

    try {
        var n=req.body.sc;
        const result=await axios.get(aio+"search.php?f="+n)      

        const mydata=result.data;
        console.log(mydata);

    } catch (error) {
        
    }

}