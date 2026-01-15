import cors from "cors";
import express from "express";
import planetRoutes from "./routes/planetRoutes";

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://localhost:5173/SW",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5173/SW",
    "http://127.0.0.1:4173",
    "https://benbalogh98.github.io"
];

const app = express();

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/planets", planetRoutes);

app.use(express.json());



export default app;