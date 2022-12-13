import app from './src/app.js';
import dotenv from "dotenv"; 

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`The server is up! \n\nlisten on http://localhost:${port}`));
