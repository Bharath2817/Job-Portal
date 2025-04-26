import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'

// initialize Express
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res) => res.send("API Working"))

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server', error);
  }
};

startServer();
