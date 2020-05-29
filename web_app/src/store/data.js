import * as firebase from "firebase";

export async function getData() {
  let data = new Map();
  await firebase
    .database()
    .ref("users/")
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((actualSnapshot) => {
          var userData = Object.values(actualSnapshot.val());
          var complainData = actualSnapshot.key;
          if (complainData === "complaints") {
            userData.forEach((s) => {
              Object.values(s).forEach((value) => {
                data.set(value["ticketNumber"], value["description"]);
              });
            });
          }
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

export async function getJanTv() {
  let data = {};
  await firebase
    .database()
    .ref("jantv/")
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        data[childSnapshot.key] = childSnapshot.val();
      });
    });
  return data;
}

export async function getUpdate() {
  let data = {};
  await firebase
    .database()
    .ref("update/")
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        data[childSnapshot.key] = childSnapshot.val();
      });
    });
  return data;
}

export async function getMplad() {
  let data = {};
  await firebase
    .database()
    .ref("mplad/")
    .once("value")
    .then(function (snapshot) {
      snapshot.forEach((childSnapshot) => {
        data[childSnapshot.key] = childSnapshot.val();
      });
    });
  return data;
}
