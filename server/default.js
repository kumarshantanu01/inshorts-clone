import { data } from "./constants/data.js";
import News from "./model/news.js";

const DefaultData = async () => {
  try {
      //sending data to database

      await News.deleteMany({}); //to prevent data from duplicating
    await News.insertMany(data);

    console.log("Data imported succcessfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default DefaultData;
