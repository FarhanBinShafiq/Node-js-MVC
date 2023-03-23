const express = require("express");
const userRouter = require("./routes/routes"); 

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(userRouter)
 

app.get('/',(req,res)=>{
    res.send("Welcome To MVC Modal")
})

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
