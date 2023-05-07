const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://rishikush31:chotubadu12345@cluster0.iabul5f.mongodb.net/food?retryWrites=true&w=majority';
const mongoDB = async () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURL, async (err, result) => {
        if (err) { console.log("some problem: ", err) }
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection("food-items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory=await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err, catData)
                {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
               
            })
        }

    });
}
module.exports = mongoDB;