import * as firebase from "firebase";

export async function getData() {
  var childKey;
  var childData;
  let data = new Map();
  await firebase
    .database()
    .ref("users/SR7gsON7QIUcskVh5IXVhaeOPk13/complaints/")
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        childKey = childSnapshot.key;
        childData = Object.values(childSnapshot.val());
        childSnapshot.forEach((actualSnapshot) => {
          var userData = Object.values(actualSnapshot.val());
          data.set(userData[1], userData[0]);
        });
      });
    });
  return data;
}

export async function getModerators() {
  let data = {};
  await firebase
    .database()
    .ref("loginType/moderator/")
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        data[childSnapshot.val()["email"]] = childSnapshot.val()["name"];
      });
    });
  return data;
}
