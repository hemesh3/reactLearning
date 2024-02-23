import React from 'react'
import propTypes from 'prop-types'
import Header from './Header'

const Student = (props) => {
  return (
    <>
      <div className='student'>
        <h2>Name : {props.name}</h2>
        <h2>Age : {props.age}</h2>
        <h2>Is Student : {props.student?'Yes':'No'}</h2>
        <Header/>
      </div>
    </>
  )
}

Student.propTypes = {
  name : propTypes.string,
  age : propTypes.number,
  student : propTypes.bool,
}

Student.defaultProps = {
  name : 'Guest',
  age : 0,
  student : false,
}

export default Student
