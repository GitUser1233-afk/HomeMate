const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    name:{type: String,
        required: true,
        unique: true,
        lowercase: true,  // Automatically converts to lowercase
        trim: true,       // Removes leading/trailing whitespace
        match: /^[a-zA-Z0-9]+$/,  // Allows only alphanumeric characters, no spaces
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]+$/.test(v);  // No spaces allowed, only alphanumeric
            },
            message: props => `${props.value} contains invalid characters! Only alphanumeric characters are allowed with no spaces.`
        }
        
    },
    CreatedAt:{type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model('category',CategorySchema);
