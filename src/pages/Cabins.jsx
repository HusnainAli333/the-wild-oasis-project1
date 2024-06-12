import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    async function fetchCabins() {
      try {
        const data = await getCabins();
        console.log(data);
      } catch (error) {
        console.error("could not load the cabin data", error);
      }
    }

    fetchCabins();
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
