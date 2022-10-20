const http = require("http");
import { app } from "./app.js";

// Choosing PORT
const PORT = process.env.PORT || 8000;

// Creating servre
const server = http.createServer(app);

// Starting listening
server.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
