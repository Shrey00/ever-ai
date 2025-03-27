interface ResponseData {
  "title": string;
  "description": string;
  "alt_text": string;
};

export type ResponseDataArr = { [K in keyof ResponseData] : ResponseData[K] }[]
