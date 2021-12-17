import { Icoment } from "../types";

export const getData = async (): Promise<Array<Icoment>> => {
  let auxData: Icoment[] = [];
  const api = "https://jsonplaceholder.typicode.com/posts/";
  try {
    const response = await fetch(api);
    auxData = await response.json();
    //return auxData;
  } catch (error) {
    console.log("Error", error);
  }
  console.log('auxData--------->', auxData);//datos de la api
  
  return auxData;
};
