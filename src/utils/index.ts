import { Icoment, USERCOMENTS } from "../types";

export const transFormData = (dataArray: Icoment[]) => {
  console.log("dataArray----->", dataArray); //todos los datos que nos proporciona la api

  let startUserId: number = dataArray[0].userId;
  console.log("startUserId---->", startUserId); //número 1

  let endUserId: number = dataArray[dataArray.length - 1].userId;
  console.log("endUserId---->", endUserId); //número 10

  let auxData: USERCOMENTS[] = [];

  for (let index: number = startUserId; index <= endUserId; index++) {
    let userData: Icoment[] = dataArray.reduce(
      (acc: Icoment[], element: Icoment) => {
        if (element.userId === index) {
          return [...acc, { ...element }];
        }
        return acc;
      },
      []
    );

    console.log("userData------>", userData); //todos los usuarios con el mismo id con todos los comentarios

    auxData.push({ coments: userData, userId: index });
  }

  console.log("auxData---->", auxData); //en coments almacenamos todos los datos del ususario y en userId el número de usuario que tiene

  return auxData;
};

export const arrayImg = [
  "./img/profile1.png",
  "./img/profile2.png",
  "./img/profile3.png",
  "./img/profile4.png",
  "./img/profile5.png",
  "./img/profile6.png",
  "./img/profile7.png",
  "./img/profile8.png",
  "./img/profile9.png",
  "./img/profile10.png",
];
