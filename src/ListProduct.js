import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import axios from "axios";

const ListProduct = ({ productos, setProductos }) => {

  const deleteProduct = (id) => {
    axios.delete(`https://johnmoyano-production.up.railway.app/api/product/${id}`)
      .then(() => {
        setProductos(productos.filter((pro) => pro._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://johnmoyano-production.up.railway.app/api/list")
        .then(({ data }) => {
          setProductos(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, [setProductos]);

  return (
    <>
    <center >
      <section center>
        <center ><h2 >John Moyano - M5B</h2></center>
        <center ><h2 >TAREA</h2></center>
        {productos.map((pro) => (
          <div key={pro._id}>
            <div >
              <div className="fw-bold">{pro.name}</div>
              <div className="text-muted small">

                <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-6" onClick={() => deleteProduct(pro._id)} />
              </div>
            </div>
            <div>


            </div>
          </div>
        ))}
      </section>
      </center>
    </>
  );
};

export default ListProduct;
