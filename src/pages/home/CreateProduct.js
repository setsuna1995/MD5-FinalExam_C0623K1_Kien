import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

export default function  CreateProduct () {
    const navigate = useNavigate()
    return (
        <div>
            <Formik initialValues={{
                title: '',
                price: '',
                description: ''
            }}
                    onSubmit={(values) => {
                        axios.post('http://localhost:3000/products', values).then(() => {
                            alert('Thêm thành công')
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
                        <Field name={'description'} type="textarea" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <button className="btn btn-info"><Link to={'/'} className="card-link">Trở lại</Link></button>

                </Form>
            </Formik>
        </div>
    )
}