import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { MySchema } from "../../validations/Validations";
import { Product } from "../../classes/MyClass";
import { postOne } from "../../API/requests";
import { MyContext } from "../../context/context";

const Add = () => {
  const { items, setItems } = useContext(MyContext);

    const formik = useFormik({
        initialValues: {
            title: "",
            img: "",
            oldPrice: "",
            newPrice: "",
            desc: "",
            disPer: "",
        },
        onSubmit: (values) => {
            console.log(values);
            const newProduct = new Product(
                values.title,
                values.img,
                values.oldPrice,
                values.newPrice,
                values.desc,
                values.disPer
            );
            postOne(newProduct)
            setItems((curr)=>([...curr,newProduct]))
        },
        validationSchema: MySchema,
    });

    return (
        <>
            <form
                onSubmit={formik.handleSubmit}
                className="container"
                action=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "150px auto",
                    gap: "20px",
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    value={formik.values.title}
                    name="title"
                    onChange={formik.handleChange}
                />
                {formik.errors.title && (
                    <span style={{ color: "red" }}>{formik.errors.title}</span>
                )}
                <TextField
                    id="outlined-basic"
                    label="desc"
                    variant="outlined"
                    value={formik.values.desc}
                    name="desc"
                    onChange={formik.handleChange}
                />
                {formik.errors.desc && (
                    <span style={{ color: "red" }}>{formik.errors.desc}</span>
                )}

                <TextField
                    id="outlined-basic"
                    label="oldPrice"
                    variant="outlined"
                    value={formik.values.oldPrice}
                    name="oldPrice"
                    onChange={formik.handleChange}
                />
                {formik.errors.oldPrice && (
                    <span style={{ color: "red" }}>
                        {formik.errors.oldPrice}
                    </span>
                )}

                <TextField
                    id="outlined-basic"
                    label="newPrice"
                    variant="outlined"
                    value={formik.values.newPrice}
                    name="newPrice"
                    onChange={formik.handleChange}
                />
                {formik.errors.newPrice && (
                    <span style={{ color: "red" }}>
                        {formik.errors.newPrice}
                    </span>
                )}

                <TextField
                    id="outlined-basic"
                    label="disPer"
                    variant="outlined"
                    value={formik.values.disPer}
                    name="disPer"
                    onChange={formik.handleChange}
                />
                {formik.errors.disPer && (
                    <span style={{ color: "red" }}>{formik.errors.disPer}</span>
                )}

                <TextField
                    id="outlined-basic"
                    label="img"
                    variant="outlined"
                    value={formik.values.img}
                    name="img"
                    onChange={formik.handleChange}
                />
                {formik.errors.img && (
                    <span style={{ color: "red" }}>{formik.errors.img}</span>
                )}

                <Button type="submit">add</Button>
            </form>
        </>
    );
};

export default Add;
