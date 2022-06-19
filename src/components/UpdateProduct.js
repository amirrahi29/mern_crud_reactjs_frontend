import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";

const UpdateProduct = ()=>{

    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const params = useParams();

    useEffect(()=>{
        console.warn(params);
        getProductDetails();
    },[])

    // fetch product details
    const getProductDetails = async ()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:1000/edit_product/${params.id}`);
        result = await result.json();

        //set product details
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    //validation
    const [error,setError] = React.useState('');

    //navigate
    const navigate = useNavigate();

    const handleUpdateProduct= async ()=>{

       console.warn(name,price,category,company);   
    if(!name || !price || !category || !company)
    {
        setError(true);
        return false;
    }

       let result = await fetch(`http://localhost:1000/update_product/${params.id}`, {
           method:'put', 
           body:JSON.stringify({name,price,category,company}),
           headers:{
               "Content-Type":"application/json"
           }
       });
       result = await result.json();
       console.warn(result);
       if(result){
        navigate('/');
       }

    }

    return(
        <div className="container">
         <br />
        <h1>Update Product</h1>
        <hr/>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="Enter product name" />
                    {error && !name &&<span className="invalid-input">Enter product name</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" id="price" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control" placeholder="Enter product price" />
                   {error && !price && <span className="invalid-input">Enter product price</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" name="category" id="category" onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control" placeholder="Enter product category" />
                    {error && !category &&<span className="invalid-input">Enter product category</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" name="company" id="company" onChange={(e)=>setCompany(e.target.value)} value={company} className="form-control" placeholder="Enter company name" />
                    {error && !company &&<span className="invalid-input">Enter company name</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <button onClick={handleUpdateProduct} className="btn btn-primary" type="submit" name="btnUpdateProduct" id="btnUpdateProduct">Update Product</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        
     </div>
    )
}

export default UpdateProduct;