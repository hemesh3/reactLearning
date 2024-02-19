import React, { useState } from 'react'

const Addcar = () => {
    const[cars,setCars] = useState([]);
    const [model,setModel] = useState("");
    const [year,setYear] = useState(new Date().getFullYear());
    const [make,setMake] = useState("");
    const [customer,setCutomer] = useState("");

    const handleCars = () => {
        const newCar = {y:year , m:make,cust:customer,mo:model}
        setCars(c=> [...c,newCar]);
        setYear(new Date().getFullYear());
        setMake('');
        setModel('');
        setCutomer('');
    }
    const handleRemoveCars = (index) => {
        setCars(c => c.filter((_,i) => i !== index))
    }
    const handleYear = (e) => {
        setYear(e.target.value)
    }
    const handleModel = (e) => {
        setModel(e.target.value)
        
    }
    const handleMake = (e) => {
        setMake(e.target.value)
        
    }
    const handleCustomer = (e) => {
        setCutomer(e.target.value)
    }


    
  return (
    <>
        <div className="border">
            <h2>Car Adding Section</h2>
            <input type="text" className='model' value={model} placeholder='Enter Model' onChange={handleModel} /><br/>
            <input type="text" className='make' value={make} placeholder='Enter Make' onChange={handleMake} /><br/>
            <input type="text" className='customer' value={customer} placeholder='Enter Customer Name' onChange={handleCustomer} /><br/>
            <input type="number" value={year} className='year' onChange={handleYear} /><br/>
            <button type="button" onClick={handleCars}>Add Car</button>
            <ol>
                { cars.map((car,index) => <li key={index}><p>Cutomer Name : {car.cust}</p>
                                                        <p>Car Year : {car.y}</p>
                                                        <p>Car Make : {car.m}</p>
                                                        <p>Car Model : {car.mo}</p>
                                                        <button onClick={()=>handleRemoveCars(index)}>Remove Car</button></li>)}
            </ol>
        </div>
    </>
  )
}

export default Addcar
