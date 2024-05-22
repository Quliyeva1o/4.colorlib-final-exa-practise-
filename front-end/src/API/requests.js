import { BASE_URL } from "./constants.js";
import axios from "axios";

export const getAll = () => {
    return axios
        .get(BASE_URL)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
};


export const getOne = (id) => {
    return axios
        .get(BASE_URL+`/${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
};

export const postOne = (payload) => {
    return axios
        .post(BASE_URL,payload)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
};



export const delOne = (id) => {
    return axios
        .delete(BASE_URL+`/${id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
};
