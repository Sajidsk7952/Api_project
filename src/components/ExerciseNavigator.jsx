import React from 'react'
import { NavLink } from 'react-router-dom';

const ExerciseNavigator = ({classname,title}) => {
  return (
    <p className={`${classname} px-6 py-2 capitalize text-white rounded-md`}>
        <NavLink to={`/exercises/search/:${title}`}>{title}</NavLink>
    </p>
  )
}

export default ExerciseNavigator;
