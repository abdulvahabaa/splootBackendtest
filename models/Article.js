import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
    {
        user: {
          type: String,
          required: true,
          ref: "User"
        },
        // name: {
        //   type: String,
        //   required: true,
        // },
        // age:{
        //     type:Number,
        //     requierd: true
        // },
        // email:{
        //     type:String,
        //     requierd: true,
        // },
        title:{
            type:String,
            requierd: true,
        },
        description:{
            type: String,
            requierd: true,
        },
    
      
      },
      { timestamps: true }
)

const Article = mongoose.model("Article",ArticleSchema)
export default Article;