import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
   {
      userType: {
         type: String,
         require: true,
      },
      userFullName: {
         type: String,
         require: true,
         unique: true,
      },
      admissionId: {
         type: String,
         min: 3,
         max: 15,
      },
      employeeId: {
         type: String,
         min: 3,
         max: 15,
      },
      age: {
         type: Number,
      },
      gender: {
         type: String,
      },
      dob: {
         type: String,
      },
      address: {
         type: String,
         default: "",
      },
      mobileNumber: {
         type: Number,
         require: true,
      },
      photo: {
         type: String,
         default: "",
      },
      email: {
         type: String,
         require: true,
         max: 50,
         unique: true,
      },
      password: {
         type: String,
         require: true,
      },
      points: {
         type: Number,
         default: 0,
      },
      activeTransactions: [
         {
            type: mongoose.Types.ObjectId,
            ref: "BookTransaction",
         },
      ],
      prevTransactions: [
         {
            type: mongoose.Types.ObjectId,
            ref: "BookTransaction",
         },
      ],
      isAdmin: {
         type: Boolean,
         default: false,
      },
   },
   {
      timestamps: true,
   }
);

 const User = mongoose.model("User", UserSchema);
export default User;