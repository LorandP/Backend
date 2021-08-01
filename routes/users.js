const express = require("express");
const router = express.Router();
const { firestoreDB: firestore } = require("../db/firestoreDB");

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
router.get("/users/:user_id/profile", async function (req, res, next) {
  const userID = req.params.user_id;
  const document = getDocumentReference(userID);
  const doc = await document.get();
  console.log({ doc, res });

  // let data = "";
  // req.on("data", (chunk) => {
  //   data += chunk;
  // });
  // req.on("end", () => {
  //   let dataObj = qs.parse(data);
  //   const formattedData = res.end(JSON.stringify(dataObj))
  //   console.log({formattedData});
  // });
  return res.status(200).json({
    title: "Hello world from user!",
  });
});

router.put("/users/:user_id/profile", async function (req, res, next) {
  const userID = req.params.user_id;
  const document = getDocumentReference(userID);
  console.log(req);
  const doc = await document.update({
    profile: {
      gender: "prefer not to say",
    },
  });
  return res.status(200).json({
    title: "Update successful!",
  });
});

module.exports = router;
