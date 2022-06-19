import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ()=>{

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async()=>{
        let result = await fetch("http://localhost:1000/all_products");
        result = await result.json();
        setProducts(result);
    }
    console.warn("products",products);

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:1000/delete_product/${id}`,{
            method: "Delete"
        })
        result = await result.json()
        if(result)
        {
            getProducts();
            alert('Record is deleted successfully!');
        }
    };

    const searchHandle = async(event)=>{
        
        let key = event.target.value;
        if(key)
        {
            let result = await fetch(`http://localhost:1000/search/${key}`);
            result = await result.json();
            if(result){
                setProducts(result);
            }
        }
        else{
            getProducts();
        }   
    }


    return(
        <div className="container">
       
        <h1>Product lists</h1>
        <hr/>
        <br/>

        <form>
            <div className="row">
                <div className="col-md-4">
                    <input className="form-control" onChange={searchHandle} type="text" name="searchText" id="searchText" placeholder="Search anything here...." />
                </div>
            </div>
        </form>

        <table className="table table-bordered">
            <thead>
            <tr>
                <th>S.No</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>COMPANY</th>
                <th>UPDATE</th>
                <th>DELETE</th>
            </tr>
            </thead>
           <tbody>
           {
            products.length>0?products.map((item,index)=>
                <tr key={item._id}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.company}</td>
                    <td><Link to={"/update/"+item._id} className="btn btn-primary">Update</Link></td>
                    <td><button onClick={()=>deleteProduct(item._id)} className="btn btn-danger" name="deleteBtn" id="deleteBtn">Delete</button></td>
                </tr>
             ):<h3><br/>No products founds</h3>
            }
           </tbody>
            
        </table>
        </div>
        )
}

export default ProductList;