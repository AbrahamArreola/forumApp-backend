import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let commentSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

export default mongoose.model('Comment', commentSchema)