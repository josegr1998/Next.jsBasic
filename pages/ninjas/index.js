import React from "react";
import axios from "axios";
import Link from "next/link";

const Ninjas = ({ ninjas }) => {
  console.log(ninjas);
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/ninjas/${item.id}`}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  // console.log(response.data);

  const data = response.data;

  return {
    props: { ninjas: data },
  };
};

export default Ninjas;
