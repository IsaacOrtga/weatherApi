import React, { useState } from 'react';


const WeatherForm = ({newLocation, newImage}) => {
    const [city, setCity] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        if(city === "" || !city) return;
        newLocation(city);
        newImage(city);
    }
  return (
   
      <form onSubmit={onSubmit}>
        <div className='input-group mb-3 mt-5 mx-auto'>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Ciudad" 
          onChange={(e) => {
            setCity(e.target.value)
          }}
          />
          <button
          className='btn btn-primary input-group-text'
          type='submit'
          >
            Buscar
          </button>
        </div>
      </form>

  );
};

export default WeatherForm