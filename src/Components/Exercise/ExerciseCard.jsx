import React from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const ExerciseCard = ({
  currentPage,
  setCurentPage,
  pagesArray,
  actualItems,
}) => {
  const navigate = useNavigate();

  function nextButton() {
    setCurentPage(currentPage === pagesArray.length ? 1 : currentPage + 1);
    setTimeout(() => {
      window.scrollTo({ top: 1600, behavior: "smooth" });
    }, 300);
  }

  function prevButton() {
    setCurentPage(currentPage === 1 ? 1 : currentPage - 1);
    setTimeout(() => {
      window.scrollTo({ top: 1600, behavior: "smooth" });
    }, 300);
  }

  if (actualItems.length < 1) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <section className="exercise-paginate">
      <div className="all-exercises">
        {actualItems.map((exercise, index) => {
          const {
            gifUrl,
            bodyPart,
            equipment,
            id,
            instructions,
            name,
            target,
          } = exercise;
          return (
            <div
              className="all-card"
              onClick={()=>{
                navigate(`/exercise/${id}`)
                window.scrollTo({top:10,behavior:'smooth'})
                }}
              key={id}
            >
              <div className="image">
                <img src={gifUrl} alt={bodyPart} />
                <div className="exercise-content">
                  <button>{target}</button>
                  <button>{bodyPart}</button>
                </div>
              </div>

              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
      {pagesArray.length > 1 && (
        <div className="paginate-buttons">
          <button onClick={prevButton}>
            <FaLongArrowAltLeft />
          </button>
          <div
            className={`${pagesArray.length <= 5 ? "sample" : "more-buttons"}`}
          >
            {pagesArray.map((page, index) => {
              return (
                <button
                  key={page}
                  style={{
                    background: `${index + 1 === currentPage ? "#3DB2FF" : ""}`,
                    border: `${index + 1 === currentPage ? "none" : ""}`,
                  }}
                  onClick={() => {
                    setCurentPage(page);
                    setTimeout(() => {
                      window.scrollTo({ top: 1600, behavior: "smooth" });
                    }, 300);
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>
          <button onClick={nextButton}>
            <FaLongArrowAltRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default ExerciseCard;
