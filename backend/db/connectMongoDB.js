import mongoose from "mongoose";

const connectMongoDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoDB connected: ${connect.connection.host}`);

    }
    catch(err){
        console.log(`error connecting to mongoDB: ${err.message}`);
        process.exit(1);
    }
}
export default connectMongoDB;