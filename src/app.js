// import mongoose from "mongoose";
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// import User from "./user.js";
// import Course from "./course.js";

// // Express declarations

// // const express = require('express');
// // const cors = require('cors');

// const port = 3000;
// const app = express();
// app.use(cors());

// // Get URL to mongo deployment
// dotenv.config();
// const mongoURL = process.env.DB_URL;
// // const mongoURL = dotenv.config().parsed.DB_URL;
// console.log(mongoURL);

// // Mongoost declaration
// mongoose.set("strictQuery", false);

// mongoose
//   .connect(mongoURL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// // Create two sample collections

// const firstUser = new User({
//   name: "Marnel",
// });
// const firstCourse = new Course({
//   title: "Biggest Banks",
// });

// // Insert the article in our MongoDB database

// const anyUser = await User.findOne({
//   name: "Marnel",
// });
// console.log(anyUser);

// /* Sample data values */

// let courseData = [
//   {
//     courseID: 1234,
//     courseName: "intro to finance",
//     courseImage: "image.com",
//     questions: [
//       {
//         questionsText: "What is your name?",
//         coinValue: 100,
//         correctIndex: 1,
//         answers: [
//           {
//             text: "answer1",
//           },

//           {
//             text: "answer2",
//           },

//           {
//             text: "answer3",
//           },

//           {
//             text: "answer4",
//           },
//         ],
//       },
//     ],
//   },
// ];

// let userData = [
//   {
//     name: "bill",
//     email: "google",
//     coins: 100,
//     courses: [
//       {
//         id: "course1",
//       },
//     ],
//   },
//   {
//     name: "anupritaa",
//     email: "yahoo",
//     coins: 200,
//     courses: [
//       {
//         id: "course1",
//       },
//     ],
//   },
//   {
//     name: "johnny",
//     email: "hotmail",
//     coins: 100,
//     courses: [
//       {
//         id: "course1",
//       },
//     ],
//   },
// ];

// /* Example routes */

// app.get("/login", (req, res) => {
//   res.type("text");
//   res.send("Hello, World!");
//   // console.log(req);
// });

// app.get("/user/:user/email/:email", (req, res) => {
//   // Access userId via: req.params.user
//   // Access bookId via: req.params.email
//   res.send(req.params);
// });

// /* Main Routes */

// /**
//  * loadApp()
//  * Parameters:
//  * - username(string)
//  * Returns:
//  * - email(string)
//  * - coins(string)
//  * - courses(array of courses)
//  */
// app.get("/username/:username", (req, res) => {
//   // Get data from database
//   console.log(req.params.username);
//   // For example, check the table to make the user exists
//   for (let i = 0; i < userData.length; i++) {
//     if (userData[i].name === req.params.username) {
//       res.send({
//         email: userData[i].email,
//         coins: userData[i].coins,
//         courses: userData[i].courses,
//       });
//     }
//   }
//   // ... Do some computation

//   // Return the requested data
// });

// /**
//  * refreshProfile()
//  * Parameters: TODO
//  * Returns: TODO
//  */
// app.get("/username/:username", (req, res) => {
//   // Fetch data from database

//   // Log param for debugging
//   console.log(req.params.username);

//   // Look in data for username
//   // let result = {};
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].name === req.params.username) {
//       res.send({
//         email: data[i].email,
//         coins: data[i].coins,
//       });
//     }
//   }

//   // Else, return null
//   res.send({});
// });

// /**
//  * refreshHome()
//  * Parameters: TODO
//  * Returns: TODO
//  */
// app.get("/home", (req, res) => {
//   res.send(req.params);
// });

// /**
//  * getCourses()
//  * Parameters: TODO
//  * Returns: TODO
//  */
// app.get("/courses", (req, res) => {
//   res.send(req.params);
// });

// /**
//  * getUserLogin()
//  * Parameters: TODO
//  * Returns: TODO
//  */
// app.get("/username/:username/email/:email/password/:password", (req, res) => {
//   res.send(req.params);
// });

// /**
//  * getCourseById()
//  * Parameters: TODO
//  * Returns: TODO
//  */
// app.get("/courseID/:courseID", (req, res) => {
//   //Fetch courses data

//   //Log parameters
//   console.log(req.params.courseID);

//   //Look for course according to ID
//   for (let i = 0; i < courseData.length; i++) {
//     if (courseData[i].courseID == req.params.courseID) {
//       res.send({
//         courseImage: courseData[i].courseImage,
//         questions: courseData[i].questions,
//       });
//     }
//   }

//   res.send({});

//   res.send(req.params);
// });

// /**
//  * getAnswer()
//  * Parameters: TODO
//  * Returns: TODO
//  */
// app.get("/courseID/:courseID/qNumber/:qNumber", (req, res) => {
//   //Log parameters
//   console.log(req.params.courseID);
//   console.log(req.params.qNumber);

//   for (let i = 0; i < courseData.length; i++) {
//     if (courseData[i].questions == req.params.questions) {
//       res.send({
//         coinValue: courseData[i].coinValue,
//         correctIndex: courseData[i].correctIndex,
//       });
//     }
//   }

//   res.send({});

//   res.send(req.params);
// });

// // Tells our app to listen to the given port
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// Sample code from MongoDB
// https://github.com/mongodb-university/atlas_starter_nodejs/blob/master/app.js

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

async function run() {
  // TODO:
  // Replace the placeholder connection string below with your
  // Altas cluster specifics. Be sure it includes
  // a valid username and password! Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri = process.env.DB_URL;

  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  const client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  const dbName = "myDatabase";
  const collectionName = "recipes";

  // Create references to the database and collection in order to run
  // operations on them.
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  /*
   *  *** INSERT DOCUMENTS ***
   *
   * You can insert individual documents using collection.insert().
   * In this example, we're going to create four documents and then
   * insert them all in one call with collection.insertMany().
   */

  const recipes = [
    {
      name: "elotes",
      ingredients: [
        "corn",
        "mayonnaise",
        "cotija cheese",
        "sour cream",
        "lime",
      ],
      prepTimeInMinutes: 35,
    },
    {
      name: "loco moco",
      ingredients: [
        "ground beef",
        "butter",
        "onion",
        "egg",
        "bread bun",
        "mushrooms",
      ],
      prepTimeInMinutes: 54,
    },
    {
      name: "patatas bravas",
      ingredients: [
        "potato",
        "tomato",
        "olive oil",
        "onion",
        "garlic",
        "paprika",
      ],
      prepTimeInMinutes: 80,
    },
    {
      name: "fried rice",
      ingredients: [
        "rice",
        "soy sauce",
        "egg",
        "onion",
        "pea",
        "carrot",
        "sesame oil",
      ],
      prepTimeInMinutes: 40,
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(recipes);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }

  /*
   * *** FIND DOCUMENTS ***
   *
   * Now that we have data in Atlas, we can read it. To retrieve all of
   * the data in a collection, we call Find() with an empty filter.
   * The Builders class is very helpful when building complex
   * filters, and is used here to show its most basic use.
   */

  const findQuery = { prepTimeInMinutes: { $lt: 45 } };

  try {
    const cursor = await collection.find(findQuery).sort({ name: 1 });
    await cursor.forEach(recipe => {
      console.log(`${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  // We can also find a single document. Let's find the first document
  // that has the string "potato" in the ingredients list.
  const findOneQuery = { ingredients: "potato" };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log("Couldn't find any recipes that contain 'potato' as an ingredient.\n");
    } else {
      console.log(`Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }

  /*
   * *** UPDATE A DOCUMENT ***
   *
   * You can update a single document or multiple documents in a single call.
   *
   * Here we update the PrepTimeInMinutes value on the document we
   * just found.
   */
  const updateDoc = { $set: { prepTimeInMinutes: 72 } };

  // The following updateOptions document specifies that we want the *updated*
  // document to be returned. By default, we get the document as it was *before*
  // the update.
  const updateOptions = { returnOriginal: false };

  try {
    const updateResult = await collection.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions,
    );
    console.log(`Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`);
  } catch (err) {
    console.error(`Something went wrong trying to update one document: ${err}\n`);
  }

  /*      *** DELETE DOCUMENTS ***
   *
   *      As with other CRUD methods, you can delete a single document
   *      or all documents that match a specified filter. To delete all
   *      of the documents in a collection, pass an empty filter to
   *      the DeleteMany() method. In this example, we'll delete two of
   *      the recipes.
   */


  const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
  try {
    const deleteResult = await collection.deleteMany(deleteQuery);
    console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
run().catch(console.dir);
