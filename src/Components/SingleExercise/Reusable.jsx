import React from "react";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const Reusable = ({ data, type }) => {
  const navigate = useNavigate();
  return (
    <>
      {data.length < 1 ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
        <div className="similar">
          <div className="content">
            <h2>
              Similar <span>{type}</span> Exercises
            </h2>
          </div>
          <div className="container">
            {data.map((item) => {
              const { gifUrl, target, bodyPart, equipment, name, id } = item;
              return (
                <div
                  className="card"
                  key={id}
                  onClick={() => {
                    navigate(`/exercise/${id}`);
                    window.scrollTo({ top: 10, behavior: "smooth" });
                  }}
                >
                  <div className="image">
                    <img src={gifUrl} alt={name} />
                    <div className="button">
                      <button>{bodyPart}</button>
                      <button>{target}</button>
                    </div>
                  </div>
                  <h3>{name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Reusable;
