import mongoose, { model } from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is required"],
        },
        email: {
            type: String,
            require: [true, "email is required"],
            lowercase: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            require: [true, "password ir required"],
            minlength: [6, "password Must be at least 6 char long"],
        },
        role: {
            type: String,
            enum: ["customer", "admin"],
            default: "customer",
        },
    }, {
    timestamps: true,
});

const UserCredentials = model("UserCredentials", userSchema);
export default UserCredentials;
