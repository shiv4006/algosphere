import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js";
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"

dotenv.config({ path: '../.env' });

const app = express();
connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://algosphere-frontend-ruddy.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
})


// ✅ Conditionally start server only if NOT on Vercel
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ Local server running at http://localhost:${PORT}`);
  });
}

// ✅ Always export app for Vercel
export default app;