import React from "react";
import {useNavigate} from 'react-router-dom';

const AddProduct = ()=>{

    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    //validation
    const [error,setError] = React.useState('');

    //navigate
    const navigate = useNavigate();

    const handleAddProduct= async ()=>{

    //    console.warn(name,price,category,company);   
    if(!name || !price || !category || !company)
    {
        setError(true);
        return false;
    }

       //get user id from localstorage or session
       const userId = JSON.parse(localStorage.getItem('user'))._id;
       let result = await fetch("http://localhost:1000/add_product", {
           method:'post',
           body:JSON.stringify({name,price,category,userId,company}),
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
        <h1>Add Product</h1>
        <hr/>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="Enter product name" />
                    {error && !name &&<span className="invalid-input">Enter product name</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="number" name="price" id="price" onChange={(e)=>setPrice(e.target.value)} value={price} className="form-control" placeholder="Enter product price" />
                   {error && !price && <span className="invalid-input">Enter product price</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="text" name="category" id="category" onChange={(e)=>setCategory(e.target.value)} value={category} className="form-control" placeholder="Enter product category" />
                    {error && !category &&<span className="invalid-input">Enter product category</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="text" name="company" id="company" onChange={(e)=>setCompany(e.target.value)} value={company} className="form-control" placeholder="Enter company name" />
                    {error && !company &&<span className="invalid-input">Enter company name</span>}
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col-md-12">
                <div className="form-group">
                    <button onClick={handleAddProduct} className="btn btn-primary" type="submit" name="btnAddProduct" id="btnAddProduct">Add New Product</button>
                </div>
            </div>
        </div>
        <br />
        <br />
        
     </div>
    )
}

export default AddProduct;