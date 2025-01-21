
import { useParams } from "react-router-dom";

const Info = () => {
    const params=useParams();
    console.log(cat)
    const data={
        electrica:["Smartphone","Tablet","Audifonos"],
        libros:["100 años de soledad","El sr de los anillos","Un mundo sucio"],
    };
  return (
    <div>Info    </div>
  )
};

export default Info;
