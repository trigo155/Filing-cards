export interface Icoment {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export interface USERCOMENTS {
    userId: number;
    coments: Icoment[];
  };