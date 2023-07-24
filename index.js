import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://ilhamfahmi011:if111202@cluster0.9sxx3vm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(UserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));