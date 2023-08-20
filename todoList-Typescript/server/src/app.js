"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var index_1 = require("./routes/index");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(index_1.default);
var uri = "mongodb+srv://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@jsd.dnv2ijz.mongodb.net/?retryWrites=true&w=majority");
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(function () {
    return app.listen(PORT, function () {
        return console.log("Server running on http://localhost:".concat(PORT));
    });
})
    .catch(function (error) {
    throw error;
});
// Importing the express library that allows us to allows us to access the use() method that helps handle the Todos routes
// Using mongoose package to connect to MongoDB by appending to the URL the credential held on the nodemon.json file
