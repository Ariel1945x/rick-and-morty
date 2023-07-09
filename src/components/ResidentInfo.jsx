import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({character}) => {

    const [info, setInfo] = useState({})

    useEffect(() => {
        axios
        .get(character)
        .then((resp) => {
            setInfo(resp.data)
        })
        .catch((error) => console.log(error))
    })

    return (
        <>
        <div className="resi-container">
            <div className="resi-box">
                <img src={info.image} className="resi-img"/>
            </div>
            <div className="resi-text">
                <h2 className="resi-name">{info.name}</h2>
                <hr/>
                <p className="resi-p"><span className="resi-span">Species:</span> {info.status}</p>
                <p className="resi-p"><span className="resi-span">Origen:</span> {info.origin?.name}</p>
                <p className="resi-p"><span className="resi-span">Times appear:</span> {info.episode?.length === 1? info.episode?.length + " once": info.episode?.length + " times"}</p>
            </div>
            
        </div>
        </>
    )
}

export default ResidentInfo