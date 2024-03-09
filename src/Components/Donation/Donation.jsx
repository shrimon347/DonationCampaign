import React from "react";

const Donation = () => {
  const items = JSON.parse(localStorage.getItem("donated")) || [];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 ml-10 mr-3 ">
      {
      items?.map((i) => {
        return (
          <div key={i}>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img className="w-full h-[250px]" src={i.image} alt="Movie" />
              </figure>

              <div
                style={{ backgroundColor: `${i.color1}` }}
                className="card-body "
              >
                <div className="card-actions ">
                  <button
                    style={{
                      backgroundColor: `${i.color2}`,
                      color: `${i.color}`,
                    }}
                    className="py-1 px-3 rounded text-xl "
                  >
                    {i.department}
                  </button>
                </div>
                <h2 style={{ color: `${i.color}` }} className="card-title">
                  {i.title}
                </h2>
                <p
                  style={{ color: `${i.color}` }}
                  className="text-lg font-medium"
                >
                  {" "}
                  Price : {i.price}
                </p>

                <div className="card-actions ">
                  <button
                    style={{ backgroundColor: `${i.color}`, color: "white" }}
                    className="btn"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Donation;
