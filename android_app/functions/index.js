const functions = require("firebase-functions");
var fetch = require("node-fetch");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendPushNotificationForUpdate = functions.database
  .ref("update/{id}")
  .onCreate((snapshot, context) => {
    const root = snapshot.ref.root;
    var messages = [];

    return root
      .child("/users")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var expoToken = childSnapshot.val().expoToken;

          if (expoToken) {
            messages.push({
              to: expoToken,
              title: "UPDATE",
              body: "New Update Added",
            });
          }
        });

        return Promise.all(messages);
      })
      .then((messages) => {
        console.log(messages);
        return fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });
      });
  });

exports.sendPushNotificationForJantv = functions.database
  .ref("jantv/{id}")
  .onCreate((snapshot, context) => {
    const root = snapshot.ref.root;
    var messages = [];

    return root
      .child("/users")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var expoToken = childSnapshot.val().expoToken;

          if (expoToken) {
            messages.push({
              to: expoToken,
              title: "JANTV",
              body: "New JANTV Added",
            });
          }
        });

        return Promise.all(messages);
      })
      .then((messages) => {
        console.log(messages);
        return fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });
      });
  });

exports.sendPushNotificationForMplad = functions.database
  .ref("mplad/{id}")
  .onCreate((snapshot, context) => {
    const root = snapshot.ref.root;
    var messages = [];

    return root
      .child("/users")
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var expoToken = childSnapshot.val().expoToken;

          if (expoToken) {
            messages.push({
              to: expoToken,
              title: "MPLAD",
              body: "New MPLAD Added",
            });
          }
        });

        return Promise.all(messages);
      })
      .then((messages) => {
        console.log(messages);
        return fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messages),
        });
      });
  });
