import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import saleOffRoute from "./routes/products.routes.js";
// import transactionRoutes from './routes/transaction.routes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// app.use([authRoutes, transactionRoutes])
app.use([authRoutes]);

app.use(saleOffRoute)

const port = process.env.PORT || 5007;
app.listen(port, () => console.log(`Server running in port ${port}`));
