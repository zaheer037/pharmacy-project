const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Backend works Good")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
