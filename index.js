const express = require('express');
const dotenv = require('dotenv');
const formidable = require('express-formidable');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const PORT = 8989;
// const appServer = require("./websocket");

// Inject websocket
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // TODO: Ganti jadi URL react-mu
        methods: "*",
      },
    
});

// Load env variable
dotenv.config();

// Load swagger json
swaggerDocument = require('./swagger.json');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Car Management API',
            version: '1.0.0',
        },
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: ['./routes/routes.js'],
};
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const specs = swaggerJsdoc(options);

app.use(formidable());
app.use(require('./routes/routes.js'));
app.use(cors(corsOptions));

// SWAGGER API DOCS
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

// Websocket request
io.on("connection", (socket) => {
    console.info("Seseorang telah masuk ke room");

    socket.on("send_message", (message) => {
        socket.emit('incoming_message', message);
    });

    socket.on("disconnect", () => {
        console.info("Seseorang telah keluar dari chat");
    });
})


server.listen(PORT, () => {
    console.info(`Server running at locahost:${PORT}`);
});
