import React from "react";
import axios from "axios";

const Details = ({ ninja }) => {
  console.log(ninja);
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  //aca le digo a Next cuantas paginas tiene que generar dependendo de la data que voy a utilizar
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() }, //should be a string
    };
  });

  //le digo los paths que tiene que crear
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const data = response.data;

  console.log(data);

  return {
    props: { ninja: data },
  };
};

export default Details;
