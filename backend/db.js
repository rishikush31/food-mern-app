const mongoose =require('mongoose');
const mongoURL='mongodb+srv://food:chotubadu12345@cluster0.wnvgfeo.mongodb.net/food?retryWrites=true&w=majority';
const mongoDB=async()=>
{
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURL,async (err,result)=>
    {
        if(err)
        {console.log("some problem: ",err)  }
        else
        {
        console.log("connected successfully"); 
        const fetched_data=await mongoose.connection.db.collection("food-items");
        fetched_data.find({}).toArray( function(err,data){
            if(err)
            {
                console.log(err);
            }
            else{
                console.log(); 
            }
        })
        }

    }); 
}
module.exports=mongoDB;