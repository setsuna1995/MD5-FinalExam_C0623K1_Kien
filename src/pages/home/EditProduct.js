import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Button} from "react-bootstrap";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function EditProduct() {
    const navigate = useNavigate()
    const id = useParams()
console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:3000/products/` + id.id)
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id.id]);
    const [productData, setProductData] = useState({
        title: '',
        price: '',
        description: ''
    });
    return (
        <div>
            <Formik initialValues={{
                title: productData.title,
                price: productData.price,
                description: productData.description
            }}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        axios.put(`http://localhost:3000/products/` + id.id, values).then(r => {
                            alert("Sửa thành công")
                            navigate('/')
                        })
                    }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
                        <Field name={'title'} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Giá sản phẩm</label>
                        <Field name={'price'} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mô tả sản phẩm</label>
                        <Field name={'description'} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"></Field>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <Button type="button" className="btn btn-info"><Link to={'/'} className="card-link">Trở lại</Link></Button>

                </Form>
            </Formik>
        </div>
    )
}