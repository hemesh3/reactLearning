import React from 'react'
import propTypes from 'prop-types'

const List = (props) => {
  const fruits = props.item
// fruits.sort((a,b) => a.calories-b.calories);
fruits.sort((a,b) => a.name.localeCompare(b.name));
// const fruits1 = fruits.filter(fruit1 => fruit1.calories >= 50)
    const itemList = fruits.map( fruit => (<li key={fruit.id}> {fruit.name.toUpperCase()} : <b>{fruit.calories} </b>  </li>) );
  return (
    <>
    <div className="border">
            <h2>List Section</h2>
      <h3>{props.categ}</h3>
      <ol>{itemList}</ol>
      </div>
    </>
  )
}

List.propTypes = {
  categ : propTypes.string,
  item : propTypes.arrayOf(propTypes.shape({id:propTypes.number,name:propTypes.string,calories:propTypes.number}))
}

List.defaultProps = {
  categ :'Category',
  item : [],
}

export default List
