const express=require('express')
const blogRouter = require("./routes/BlogRoutes");

const app=express();
app.use("/api/blogs", blogRouter);
app.use(express.json());
app.listen(3030,()=>{
    console.log("server connected succcesfully");
})

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);





module.exports=app;