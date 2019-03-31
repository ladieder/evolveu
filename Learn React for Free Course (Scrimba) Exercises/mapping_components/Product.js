import React from "react"

function Product(props) {
  return (
    <div>
        <h3>Item: {props.name}</h3>
        <h4>Price: ${props.price}</h4>
        <p>Description: {props.description}</p>
        <hr />
    </div>
  )
}

export default Product