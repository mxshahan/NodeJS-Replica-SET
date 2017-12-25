var mongoose = require('mongoose');
module.exports.config = ()=>{
    //Connnect to the database
    mongoose.connect('mongodb://root:123456@ds131237.mlab.com:31237/replica');

    // Create a schema - this is like a blueprint
    var todoSchema = new mongoose.Schema({
        item: String
    });

    var Todo = mongoose.model('Todo', todoSchema);
    var itemOne = Todo({item: 'get flowers'}).save(function(err){
        if(err) throw err;
        console.log('item saved');
    });
}