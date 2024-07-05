const express =require("express");
const  mongoose  = require("mongoose");
const router =express.Router();
const bodyParser =require("body-parser")
require("dotenv").config();
const cors =require("cors")
const app = express();


const mentorRouter = require('./routes/MentorRouter')
const studentRouter = require('./routes/StudentRouter')

app.use(cors({
  origin: "https://student-fe-eosin.vercel.app",
  credentials: true
}));
app.use(bodyParser.json());




app.use('/Mentors',mentorRouter);
app.use('/Students',studentRouter);

mongoose
 .connect(process.env.MONGODB)
 .then(()=>{
  console.log("connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})
.catch((error) =>{
 console.log("conection error",error.message)
});