import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

export default function ProductDetail () {
    const [product, setProduct] = useState([]);
    const id = useParams()
    console.log(id)
    const loadProduct = () => {
        axios.get(`http://localhost:3000/products/` + id.id)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('yError fetching data:', error);
            });
    }
    useEffect(() => {
        loadProduct();
    }, []);
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Tên sản phẩm: {product.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Mô tả: {product.description}</h6>
                    <p className="card-text">Giá: {product.price}</p>
                   <button className="btn btn-info"> <Link to={'/'} className="card-link">Trở lại</Link></button>
                </div>
            </div>
        </div>
    )
}
