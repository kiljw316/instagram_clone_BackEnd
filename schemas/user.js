import mongoose from 'mongoose';

const { Schema } = mongoose;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    pw: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        default: "/profile.png"
    }
}, {
    timestamps: true,
});

export default mongoose.model('User', userSchema);