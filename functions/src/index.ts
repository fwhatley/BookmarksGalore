// const functions = require('firebase-functions');
// const sgMail = require('@sendgrid/mail');
// const cors = require("cors")({
//   origin: true
// });
//
// const API_KEY = functions.config().sendgrid.key;
// sgMail.setApiKey(API_KEY);
//
// exports.emailMessage = functions.https.onRequest((req:any, res: any) => {
//   return cors(req, res, async() => {
//     await sendApplicationEmail(req.body);
//
//     res.status(200).send({ status: 'success' });
//   });
// });
//
// async function sendApplicationEmail(body: any) {
//
//   const msg = {
//     to: ['fredywhatley@gmail.com'],
//     from: 'awhatleybrothers@gmail.com',
//     subject: 'Bookmarker Contact Us Page',
//     templateId: 'd-009904ad5ed14ef6b47d7e6f5550c360',
//     dynamic_template_data: body,
//   };
//   await sgMail.send(msg)
//   console.log('Email was sent...');
//
//   return null;
// }


import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as firebaseHelper from 'firebase-functions-helper/dist';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from 'cors';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
const main = express();


main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.use('/api/v1', app);

const contactsCollection = 'contacts';

export const webApi = functions.https.onRequest(main);

interface Contact {
  firstName: String
  lastName: String
  email: String
}

// Add new contact
app.post('/contacts', async (req, res) => {
  // return cors((req2, res2, async() ) => {
    try {
      const contact: Contact = {
        firstName: req.body['firstName'],
        lastName: req.body['lastName'],
        email: req.body['email']
      };

      console.log("this got logged");

      const newDoc = await firebaseHelper.firestore
        .createNewDocument(db, contactsCollection, contact);
      res.status(201).send(`Created a new contact: ${newDoc.id}`);
    } catch (error) {
      res.status(400).send(`Contact should only contains firstName, lastName and email!!!`)
    }
  // });

});

// Update new contact
app.patch('/contacts/:contactId', async (req, res) => {
  const updatedDoc = await firebaseHelper.firestore
    .updateDocument(db, contactsCollection, req.params.contactId, req.body);
  res.status(204).send(`Update a new contact: ${updatedDoc}`);
});

// View a contact
app.get('/contacts/:contactId', (req, res) => {
  firebaseHelper.firestore
    .getDocument(db, contactsCollection, req.params.contactId)
    .then(doc => res.status(200).send(doc))
    .catch(error => res.status(400).send(`Cannot get contact: ${error}`));
});

// View all contacts
app.get('/contacts', (req, res) => {
  firebaseHelper.firestore
    .backup(db, contactsCollection)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(`Cannot get contacts: ${error}`));
});

// Delete a contact
app.delete('/contacts/:contactId', async (req, res) => {
  const deletedContact = await firebaseHelper.firestore
    .deleteDocument(db, contactsCollection, req.params.contactId);
  res.status(204).send(`Contact is deleted: ${deletedContact}`);
});

export { app };
