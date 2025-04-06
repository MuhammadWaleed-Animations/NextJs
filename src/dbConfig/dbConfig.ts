import mongoose from "mongoose";
export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("Mongo DB connected Successfully");
        });
        connection.on('error',(err)=>{
            console.log("Mongo DB connection error, trying turning the cluster on "+ err);
            process.exit();
        })
    }catch(error){
        console.log("something went wrong");
        console.log(error)
    }
}