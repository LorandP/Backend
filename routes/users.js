const express = require("express");
const router = express.Router();
const { firestoreDB: firestore } = require("../db/firestoreDB");
const HttpError = require("../error");
const { errorHandler } = require("../error/errorHandler");

function getDocumentReference(doc) {
  return firestore.collection("users").doc(doc);
}

async function quickstart() {
  // Obtain a document reference.
  const document = firestore.doc("posts/intro-to-firestore");

  // Enter new data into the document.
  await document.set({
    title: "Welcome to Firestore",
    body: "Hello World",
  });
  console.log("Entered new data into the document");

  // Update an existing document.
  await document.update({
    body: "My first Firestore app",
  });
  console.log("Updated an existing document");

  // Read the document.
  const doc = await document.get();
  console.log("Read the document");

  // Delete the document.
  // await document.delete();
  // console.log("Deleted the document");
}

/* GET users listing. */
// Using route parameters /:user_id
router.get("/users/:user_id", async function (req, res) {
  try {
    // 1. Validate input
    const userID = req.params.user_id;
    if (!userID) {
      throw new HttpError(400, "userID query parameter should be defined");
    }
    // 2. Perform the logic of your endpoint
    const document = getDocumentReference(userID);
    const doc = await document.get();
    const data = doc.data();

    // 3. Handle errors
    if (!data) {
      throw new HttpError(404, "User not found");
    }

    // 4. Return response
    return res.status(200).json(data);
  } catch (error) {
    return errorHandler({ res, error });
  }
});

router.put("/users/:user_id", async function (req, res) {
  try {
    // Verify input
    const userID = req.params.user_id;
    if (!userID) {
      throw new HttpError(400, "userID query parameter should be defined");
    }
    const gender = req.body?.gender;
    const birthday = req.body?.birthday;
    let dataToUpdate = {};
    if (gender) {
      dataToUpdate = {
        gender,
      };
    }
    if (birthday) {
      dataToUpdate = {
        ...dataToUpdate,
        birthday,
      };
    }

    // Perform logic
    const document = getDocumentReference(userID);
    await document.update({
      ...dataToUpdate,
    });

    return res.status(200).json({
      title: "Update successful!",
    });
  } catch (error) {
    return errorHandler({ res, error });
  }
});

router.post("/users", async function (req, res) {
  try {
    // Verify input
    const userID = req.body?.userID;
    if (!userID) {
      throw new HttpError(400, "userID property should be defined");
    }
    const gender = req.body?.gender;
    if (!gender) {
      throw new HttpError(400, "gender property should be defined");
    }
    const birthday = req.body?.birthday;
    if (!birthday) {
      throw new HttpError(400, "birthday property should be defined");
    }
    // Perform logic
    const data = {
      gender,
      birthday,
    };
    const result = await firestore.collection("users").doc(userID).set(data);

    return res.status(200).json({
      title: "Post successful!",
    });
  } catch (error) {
    return errorHandler({ res, error });
  }
});

module.exports = router;
