import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {toast} from "react-toastify";

export default function Home() {
    const [list, setList] = useState([]);
    let index = 1;
    const loadList = () => {
        axios.get(`http://localhost:3000/products`)
            .then(response => {
                setList(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    useEffect(() => {
        loadList();
    }, []);
    return (

        <div>
            <div>
                <button type="button" className="btn btn-secondary">
                    <Link style={{textDecoration: "none", color: "black"}} type={"button"}
                          to={`/create`}>Create</Link>
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Thứ tự</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {list.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{index++}</th>
                            <td><Link to={'/detail/' + product.id}>{product.title}</Link></td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Button className="btn-danger" type={"submit"} onClick={() => {
                                    let choice = window.confirm("Bạn có chắc chắn muốn xóa hay không")
                                    if (choice) {
                                        axios.delete('http://localhost:3000/products/' + product.id).then(res => {
                                             toast.success('Delete successfully', {
                                                autoClose: 500
                                            })
                                            loadList();
                                        })
                                    }
                                }}>
                                    Delete
                                </Button>
                            </td>
                            <td>
                                <Button className="btn-info" type={"button"}>
                                    <Link style={{textDecoration: "none", color: "black"}} type={"button"}
                                          to={'edit/' + product.id}>Edit Student</Link>
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}