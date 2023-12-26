import React from "react";
import BodyPartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'


const Detail = ({ singleExercise }) => {
  const { gifUrl, bodyPart, equipment, id, instructions, name, target } =
    singleExercise;
 
    const extraDetail = [
        {
            icon: BodyPartImage,
            name:bodyPart,
        },
        {
            icon: TargetImage,
            name:target,
        },
        {
            icon: EquipmentImage,
            name:equipment,
        }
    ]

  return (
    <div className="single-card">
      <div className="image">
        <img src={gifUrl} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </p>

        <div className="extraDetail">
            {extraDetail.map((item,index)=>{
                const {icon,name} = item;
                return (
                    <div className="extra" key={index}>
                        <img src={icon} alt="icon" />
                        <h4>{name}</h4>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
