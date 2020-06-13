import * as firebase from "firebase";

export function refresh() {
  var childKey;
  var childData;
  firebase
    .database()
    .ref("users/" + global.User.user.uid + "/complaints/")
    .on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childKey = childSnapshot.key;
        childData = Object.values(childSnapshot.val());
        if (childKey === "suggest") {
          global.dataForSuggest = childData;
        } else if (childKey === "expatriates") {
          global.dataForExpatriates = childData;
        } else if (childKey === "medical") {
          global.dataForMedical = childData;
        } else if (childKey === "other") {
          global.dataForOther = childData;
        } else if (childKey === "event") {
          global.dataForEvent = childData;
        } else if (childKey === "parliament") {
          global.dataForParliament = childData;
        }
      });
    });

  const arrSuggestData = [];
  if (typeof global.dataForSuggest !== "undefined") {
    var k = 0;
    for (var i = 0; i < global.dataForSuggest.length; i++) {
      if (Object.values(global.dataForSuggest[i])[0]["status"] === "open") {
        arrSuggestData[k] =
          "Ticket Number: " + Object.values(global.dataForSuggest[i])[1];
        k = k + 1;
      }
    }
  }

  const arrMedicalData = [];
  if (typeof global.dataForMedical !== "undefined") {
    var k = 0;
    for (var i = 0; i < global.dataForMedical.length; i++) {
      if (Object.values(global.dataForMedical[i])[0]["status"] === "open") {
        arrMedicalData[k] =
          "Ticket Number: " + Object.values(global.dataForMedical[i])[1];
        k = k + 1;
      }
    }
  }

  const arrExpData = [];
  if (typeof global.dataForExpatriates !== "undefined") {
    var k = 0;
    for (var i = 0; i < global.dataForExpatriates.length; i++) {
      if (Object.values(global.dataForExpatriates[i])[0]["status"] === "open") {
        arrExpData[k] =
          "Ticket Number: " + Object.values(global.dataForExpatriates[i])[1];
        k = k + 1;
      }
    }
  }

  const arrOtherData = [];
  if (typeof global.dataForOther !== "undefined") {
    var k = 0;
    for (var i = 0; i < global.dataForOther.length; i++) {
      if (Object.values(global.dataForOther[i])[0]["status"] === "open") {
        arrOtherData[k] =
          "Ticket Number: " + Object.values(global.dataForOther[i])[1];
        k = k + 1;
      }
    }
  }

  const arrEventData = [];
  if (typeof global.dataForEvent !== "undefined") {
    var k = 0;
    for (var i = 0; i < global.dataForEvent.length; i++) {
      if (Object.values(global.dataForEvent[i])[0]["status"] === "open") {
        arrEventData[k] =
          "Ticket Number: " + Object.values(global.dataForEvent[i])[1];
        k = k + 1;
      }
    }
  }

  const arrParliamentData = [];
  if (typeof global.dataForParliament !== "undefined") {
    var k = 0;
    for (var i = 0; i < global.dataForParliament.length; i++) {
      if (Object.values(global.dataForParliament[i])[0]["status"] === "open") {
        arrParliamentData[k] =
          "Ticket Number: " + Object.values(global.dataForParliament[i])[1];
        k = k + 1;
      }
    }
  }

  global.DATA = [
    {
      title: "Bring to Attention",
      data: arrSuggestData,
    },
    {
      title: "Medical",
      data: arrMedicalData,
    },
    {
      title: "Expatriates",
      data: arrExpData,
    },
    {
      title: "Other",
      data: arrOtherData,
    },
    {
      title: "Invite",
      data: arrEventData,
    },
    {
      title: "Raise in Parliament",
      data: arrParliamentData,
    },
  ];
};