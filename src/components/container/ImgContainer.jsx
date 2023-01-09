import React, { useState } from "react";
import WeatherForm from "../pure/form/WeatherForm";

const ImgContainer = () => {
  let urlUnsplash = "https://api.unsplash.com/photos/";
  let keyUnsplash = "PaajP2G8I9guEuZCeDplICc140hXQtReKkq3uhn6SX0"

  const getImage = async (loc) => {
    urlUnsplash = urlUnsplash + '?q=' + loc + '&client_id=' + keyUnsplash; //esto está mal
    await fetch(urlUnsplash).then((response) => {
      if (!response.ok) throw { response }
      return response.json();
    }).then((imageData) => {
      console.log(imageData)
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <React.Fragment>
    <WeatherForm
    newLocation={getImage} />
    </React.Fragment>

  )


}
export default ImgContainer
