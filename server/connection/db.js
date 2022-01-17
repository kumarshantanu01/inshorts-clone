import mongoose from "mongoose";

const Connection = async () => {
  try {
      //connecting to mongodb
    const URL = `mongodb://kumarshantanu:12345@inshorts-clone-shard-00-00.pqqng.mongodb.net:27017,inshorts-clone-shard-00-01.pqqng.mongodb.net:27017,inshorts-clone-shard-00-02.pqqng.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-k0ow7i-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default Connection;
