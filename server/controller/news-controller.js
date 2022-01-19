import News from "../model/news.js";

export const getNews = async (request, response) => {
  try {
    const size = Number(request.query.size);
    const skip = Number(request.query.page);
    let data = await News.find({}).limit(size).skip(size * skip);

    response.status(200).json(data);
  } catch (error) {
    //500 is internal serer error which is error in the backend side
    response.status(500).json(error);
  }
};
