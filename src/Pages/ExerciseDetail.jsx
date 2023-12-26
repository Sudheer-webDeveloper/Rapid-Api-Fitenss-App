import React, { useEffect, useState } from 'react'
import Detail from '../Components/SingleExercise/Detail'
import Videos from '../Components/SingleExercise/Videos'
import SimilarExercise from '../Components/SingleExercise/SimilarExercise'
import { useParams } from 'react-router-dom'
import {fetchData,exerciseOptions,youtubeOptions} from '../Utils/fetchData'

const ExerciseDetail = () => {

  const [exerciseDetail,setExerciseDetail] = useState([])
  const [videoData,setVideoData] = useState([])
  const [targetMuscleExercises,setMuscleTargetExercises] = useState([])
  const [equipmentExercises,setEquipmentExercises] = useState([])
  const {id} = useParams()


  useEffect(()=>{
     const fetchExercisesData = async()=>{
      try {
        const exerciseUrl = 'https://exercisedb.p.rapidapi.com'
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
        // First api call
        const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`,exerciseOptions)
        setExerciseDetail(exerciseDetailData)

        // Second api call
        const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
        setVideoData(exerciseVideoData.contents)

        // Third API call


        const targetMuscleExercisesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
        setMuscleTargetExercises(targetMuscleExercisesData)

        // Fourth API call
        const equipmentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
        setEquipmentExercises(equipmentExercisesData )
        
      } catch (error) {
        console.log("error while fetching the resource",error)
      }
     }
     fetchExercisesData()
  },[id])


  return (
    <>
      <Detail singleExercise = {exerciseDetail}/>
      <Videos exerciseVideos={videoData} name={exerciseDetail.name} />
      <SimilarExercise targetMusclesExerices = {targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </>
  )
}

export default ExerciseDetail
