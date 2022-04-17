const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors({ origin: ['https://romanpolianski.github.io', 'http://localhost:3000'] }));
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
        await sequelize.authenticate();
        console.log('Database conected');
    } catch (error) {
        console.log(error);
    }
};

start();
