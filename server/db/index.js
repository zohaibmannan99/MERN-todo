const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://zmannan:Knxwledge99!@cluster0.v0ak9.mongodb.net/')
.then(()=> console.log('Connected MongoDB'))
.catch((e) => console.loge(e));