import mongoose from "mongoose";

(async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost/forumApp", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
})();
