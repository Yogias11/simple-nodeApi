const express = require('express');
const mongoose = require('mongoose');

const { url } = require('./config');
const app = express();
app.use(express.json());
const ResumeRoute = require('./app/controllers/ResumeController')
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log('Mongo Connected'))
.catch(err => console.log(err));
app.get('/', (req, res) => {
   res.send('Hello World');
});
app.use('/resume', ResumeRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));