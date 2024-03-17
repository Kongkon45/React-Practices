import React from "react";

const Card = (props) => {
  // console.log(props)
  const { title, desc } = props;
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="bg-gray-500 p-4 rounded text-white">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <div className="bg-gray-500 p-4 rounded text-white">
          <h1>{title}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusamus officiis sint. Recusandae unde voluptatum maxime fugit,
            animi quisquam quos hic itaque aut eos amet modi omnis quas incidunt
            temporibus!
          </p>
        </div>
        <div className="bg-gray-500 p-4 rounded text-white">
          <h1>Kongkon Jowarder</h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
