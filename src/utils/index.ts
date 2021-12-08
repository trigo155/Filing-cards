import { Icoment } from '../types';


type USERCOMENTS = {
    userId: number;
    coments: Icoment[];
  };
  

  export const transFormData = (dataArray: Icoment[]) => {

    let startUserId: number = dataArray[0].userId;
    let endUserId: number = dataArray[(dataArray.length - 1)].userId;

    let auxData: USERCOMENTS[] = [];

    for (let index: number = startUserId; index <= endUserId; index++) {
        let userData: Icoment[] = dataArray.reduce((acc: Icoment[], element: Icoment) => {
            if (element.userId === index) {
                return [...acc, { ...element }]
            }
            return acc
        }, [])
        auxData.push({ coments: userData, userId: index })
    }
    return auxData;

};