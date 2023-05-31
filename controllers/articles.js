import Article from "../models/Article.js";
import User from "../models/User.js";

export const createArticle = async (req, res) => {
    console.log(req.body)
    try {
        console.log (req.params)
        const { userId } = req.params
        const { title, description } = req.body;
         
          const newArticle = new Article({
            user : userId,
            title,
            description,
          });
          await newArticle.save();
   
        const Articles = await Article.find().sort("-createdAt");

        res.status(201).json(Articles);
      } catch (err) {
        res.status(409).json({ message: err.message });
      }
  };

  export const getAllArticles = async (req,res)=>{
    console.log(req.body)
    try{
        const Articles = await Article.find().populate("user","-password").sort("-createdAt");
        res.status(200).json(Articles);

    }catch(err){
        res.status(404).json({ message: err.message });
    }
  }

 