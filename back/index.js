require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookeParser = require('cookie-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookeParser());
app.use(express.static('static'));
app.use(
    cors({
        origin: '*',
    })
);
app.use(fileUpload({}));

app.use('/api', router);

app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

start();
