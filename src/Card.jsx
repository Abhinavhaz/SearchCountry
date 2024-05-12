import axios from "axios";
import React, { useEffect, useState } from "react";
import Tile from "./Tile";
function Card() {
  const [country, setCountry] = useState([]);
const [search, setSearch] = useState("")

const [filterdata,setFilterData] =useState([])


const handleChange=(e)=>{
setSearch(e.target.value)
}


  const handleCountry = async () => {
    try {
      let res = await axios.get(`https://restcountries.com/v3.1/all`);
      console.log("res", res.data);
      setCountry(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCountry();
  }, []);



useEffect(()=>{
    const value = country.filter((flag)=>
    flag.name.common.toLowerCase().includes(search.toLocaleLowerCase())
)
setFilterData(value)
},[search])


  return (
    <>
    <div>
        <input type="text" placeholder="Search for a Country" onChange={(e) => handleChange(e)} />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        flexWrap: "wrap",
        padding: "20px",
      }}
    >
{search == "" ?<>
      {country.map((item) => {
        return (
          <Tile
            key={item.ccn3}
            flag={item.flags.png}
            name={item.name.common}
            alt={item.flags.alt}
          />
        );
      })}
      </>
      :
<>
{filterdata.map((item) => {
        return (
          <Tile
            key={item.ccn3}
            flag={item.flags.png}
            name={item.name.common}
            alt={item.flags.alt}
          />
        );
      })}

</>
    }
 
    </div>
    </>
  );
}
export default Card;
