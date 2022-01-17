import News from "../model/news.js";

export const getNews = async (request, response) => {
  try {
    let data = await News.find({});

    response.status(200).json(data);
  } catch (error) {
    //500 is internal serer error which is error in the backend side
    response.status(500).json(error);
  }
};
