const mongoose = require('mongoose');
const skusSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, 'Please add a SKU name'],
        unique: true,
        trim: true,
        maxlenght:[30, 'Name can not be more than 30 characters']
    },
    attributes: {
        type: String,
        required: [true, 'Please add a attributes']
    },
    url: {
        type: String,
        required: [true, 'Please add URL']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
    },
    description: {
        type: String,
        maxlenght:[100, 'Description can not be more than 100 characters']
    },
    marketplaces:{
        type: String    
    }
});

module.exports = mongoose.model('Skus', skusSchema);