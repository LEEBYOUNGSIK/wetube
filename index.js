import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "bodyParser";
import cookieParser from "cookieParser";


const app = express();
const PORT = 4000;

const handleHome = (req, res) => res.send("Hello from home");
const handleProfile = (req, res) => res.send("You are on my profile!!!");

const betweenHome = (req, res, next) => {
  console.log('Between');
  next();
}

const handleListening = () => 
  console.log(`Listening on: http://localhost:${PORT}`);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend:true }));
app.use(morgan('dev'));
app.use(helmet());

app.get('/', handleHome);
app.get('/profile', handleProfile);

app.listen(PORT, handleListening);
