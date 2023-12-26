import React from 'react'
import Reusable from './Reusable'

const SimilarExercise = ({targetMusclesExerices,equipmentExercises}) => {
  return (
    <>
      <Reusable data={targetMusclesExerices} type="Target Muscle" />
      <Reusable  data={equipmentExercises} type='Equipment' />
    </>
  )
}

export default SimilarExercise
