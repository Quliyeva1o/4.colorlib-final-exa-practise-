import { object, string, number } from "yup";

export const MySchema = object({
    title: string().required(),
    img: string().url().required(),
    oldPrice: number().required(),
    newPrice: number().required(),
    desc: string().required(),
    disPer: number().required()
});
