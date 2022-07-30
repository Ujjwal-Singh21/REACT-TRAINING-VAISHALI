import { useState } from 'react'

let initialState = {

  productId: '',
  productName: '',
  productCost: '',
  productOnline: '',
  // productOnline: 'Yes',
  productCategory: '',

  availableInStore: {
    BigBazar: 'Not Available in BigBazar',
    DMart: 'Not Available in DMart',
    Reliance: 'Not Available in Reliance',
    MegaStore: 'Not Available in MegaStore'
  }
}

export const ReactForm = () => {

  const [product, setProduct] = useState(initialState)

  // Change handler 
  //---------------
  let handleChange = (e) => {

    let {name, type, value} = e.target

    if(type === 'text') {
      setProduct({...product, [name]: value})
    } 
    else if (type === 'radio') {
      setProduct({...product, [name]: value})
    }
    else {
      setProduct({...product, [name]: value})
    }
  }

  // Handler for checkboxes
  //-----------------------
  let handleCheckBoxChange = (e) => {

    let {name, checked} = e.target

    setProduct({...product, availableInStore: {

      ...product.availableInStore,

      [name]: name === 'BigBazar' ? 'Available in BigBazar' :
              name === 'DMart' ? 'Available in DMart' : 
              name === 'Reliance' ? 'Available in Reliance' : 
              name === 'MegaStore' ? 'Available in MegaStore' : 
              null
    } 
  })
}

  // Submit handler 
  //---------------
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(product)
  }

  return (
    <>

    <h3> BASIC REACT FORM </h3>

    <form onSubmit={handleSubmit}>

    <div>
     <label> Product ID : </label>
      <input type='text' name='productId' value={product.productId} onChange={handleChange} required  />
       <br /> <br />

      <label> Product Name : </label>
      <input type='text' name='productName' value={product.productName} onChange={handleChange} required  /> 
      <br /> <br />

      <label> Product Cost : </label>
      <input type='text' name='productCost' value={product.productCost} onChange={handleChange} required  />
    </div>

    <br />  <br />

      <div>
        <label> Product Online : </label>
        <input type='radio' name='productOnline' value='Yes' onChange={handleChange} /> Yes
        <input type='radio' name='productOnline' value='No' onChange={handleChange} /> No
      </div>

      <br /> <br />

      <div>
         <label> Product Category : </label>
         <select name='productCategory' value={product.productCategory} onChange={handleChange} required>
            <option> -- select --  </option>
            <option name='grocery' value='grocery'> Grocery </option>
            <option name='mobile' value='mobile'> Mobile </option>
            <option name='electronics' value='electronics'> Electronics </option>
            <option name='clothes' value='clothes'> Clothes </option>
        </select>
      </div>

      <br /> <br />

      <div>
       <label> Available in Store : </label> 
       <input type='checkbox' name='BigBazar' onChange={handleCheckBoxChange} /> Big Bazar 
       <input type='checkbox' name='DMart' onChange={handleCheckBoxChange} /> DMart 
       <input type='checkbox' name='Reliance' onChange={handleCheckBoxChange} /> Reliance 
       <input type='checkbox' name='MegaStore' onChange={handleCheckBoxChange} /> Mega Store 
      </div>
      
      <br /> <br />

      <button> Add Product </button>

    </form> 
    </>
  )
}


















{/* <input type='radio' name='productOnline' value='Yes' onChange={handleChange}
         checked={product.productOnline === 'Yes'} required/> Yes
        <input type='radio' name='productOnline' value='No' onChange={handleChange} 
         checked={product.productOnline === 'No'} required/> No */}