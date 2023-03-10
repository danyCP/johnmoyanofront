import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import ListProduct from "./ListProduct";
import FormProduct from './FormProduct';

function App() {
  const [pro, setPro] = useState([]);

  const cargaPro = () => {
    axios.get("https://johnmoyano-production.up.railway.app/api/list").then(({ data }) => setPro(data));
  };

  useEffect(() => {
    cargaPro();
    const interval = setInterval(() => cargaPro(), 1 * 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <ListProduct productos={pro} />
        <FormProduct />
      </section>
    </>
  );
}

export default App;
