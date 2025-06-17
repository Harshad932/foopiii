import express from "express";
import bp from "body-parser";
import axios from "axios";
import {dirname} from "path";
import {fileURLToPath} from "url";



const port=process.env.PORT || 3000;
const app=express();
const aio="http://www.themealdb.com/api/json/v1/1/"

const dir=dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

var dc=[];

app.get("/",(req,res)=>{

    res.render(`${dir}/views/index.ejs`);

})

app.get("/contact",(req,res)=>{

    res.render(`${dir}/views/contact.ejs`);

})

app.post("/random",ram);
app.post("/name",namef);
app.post("/fl",fl);
app.post("/cat",cat);
app.post("/ing",ing);
app.post("/area",area);
app.post("/recipePage",recipe)

app.listen(port,()=>{

    console.log("Server Running On PORT:"+port);

})

async function ram(req, res) {
    var result;
    var mydata;

    try {
        do {
            result = await axios.get(aio + "random.php");
            mydata = result.data.meals;
            
        } while (searchInObject(mydata[0]));

        dc.length = 0;
        dc = [].concat(mydata);

        res.render(`${dir}/views/index.ejs`, { foods: mydata });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

async function namef(req,res)
{

    try {
        var n=req.body.t1;
        const result=await axios.get(aio+"search.php?s="+n);      
        const mydata=result.data.meals;

        for(var i = mydata.length - 1; i >= 0; i--)
        {
            if(searchInObject(mydata[i]))
            {

                mydata.splice(i, 1);

            }

        }

        dc.length=0;
        dc=[].concat(mydata);

        res.render(`${dir}/views/index.ejs`,{foods:mydata});

    } catch (error) {
        
    }

}

async function fl(req,res)
{

    var cateo;

    try {
        var n=req.body.sc;

        const result=await axios.get(aio+"search.php?f="+n);  
        const mydata=result.data.meals;
        for(var i = mydata.length - 1; i >= 0; i--)
        {
            if(searchInObject(mydata[i]))
            {

                mydata.splice(i, 1);

            }

        }
        dc.length=0;
        dc=[].concat(mydata);

        res.render(`${dir}/views/index.ejs`,{foods:mydata});

    } catch (error) {
        
    }

}

async function cat(req,res)
{

    try {
        var n=req.body.sc;
        var mydata=[];
        const result=await axios.get(aio+"filter.php?c="+n);

        const foodids=result.data.meals;

        for(var i of foodids)
        {

            const result2=await axios.get(aio+"lookup.php?i="+i.idMeal);
            mydata.push(result2.data.meals[0]);

        }

        for(var i = mydata.length - 1; i >= 0; i--)
        {
            if(searchInObject(mydata[i]))
            {

                mydata.splice(i, 1);

            }

        }

        dc.length=0;
        dc=[].concat(mydata);

        res.render(`${dir}/views/index.ejs`,{foods:mydata});

    } catch (error) {
        console.log(error);
    }

}

async function ing(req,res)
{

    try {
        var n=req.body.sc;
        var mydata=[];
        const result=await axios.get(aio+"filter.php?i="+n);      

        const foodids=result.data.meals;

        for(var i of foodids)
        {

            const result2=await axios.get(aio+"lookup.php?i="+i.idMeal);
            mydata.push(result2.data.meals[0]);

        }

        for(var i = mydata.length - 1; i >= 0; i--)
        {
            if(searchInObject(mydata[i]))
            {

                mydata.splice(i, 1);

            }

        }

        dc.length=0;
        dc=[].concat(mydata);

        res.render(`${dir}/views/index.ejs`,{foods:mydata});

    } catch (error) {
        
    }

}

async function area(req,res)
{

    try {
        var n=req.body.sc;
        var mydata=[];
        const result=await axios.get(aio+"filter.php?a="+n);      

        const foodids=result.data.meals;

        for(var i of foodids)
        {

            const result2=await axios.get(aio+"lookup.php?i="+i.idMeal);
            mydata.push(result2.data.meals[0]);

        }

        for(var i = mydata.length - 1; i >= 0; i--)
        {
            if(searchInObject(mydata[i]))
            {

                mydata.splice(i, 1);

            }

        }

        dc.length=0;
        dc=[].concat(mydata);

        res.render(`${dir}/views/index.ejs`,{foods:mydata});

    } catch (error) {
        
    }

}

function recipe(req,res)
{

    var id=req.body.foods;
    var mydata;

    for(var i of dc)
    {

        if(i.idMeal==id)
        {

            mydata=i;
            break;

        }

    }
    
    var imgs=mydata.strMealThumb;
    var name=mydata.strMeal;
    var cat=mydata.strCategory;
    var area=mydata.strArea;
    var instruc=mydata.strInstructions;
    
    var ing="";

    for(var k in mydata)
    {

        if(k.includes("strIngredient"))
        {

            ing=ing+mydata[k];

            if(!mydata[k])
            {
                
                break;
            
            }

            ing+=",";

        }

    }

    var ing=ing.substring(0,ing.length-1);

    res.render(`${dir}/views/recipe.ejs`,{imgsr:imgs,namer:name,catr:cat,arear:area,instrucr:instruc,ingr:ing});

}

function searchInObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'string' && value.toLowerCase().includes("beef")) 
            {
                return true; // Found the string in the object
            }
        }
    }
    return false; // String not found in the object
}

