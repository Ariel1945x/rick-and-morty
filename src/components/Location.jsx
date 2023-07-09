import axios from "axios"
import { useEffect, useState } from "react"
import ResidentInfo from "./ResidentInfo"

const Location = () => {

    const [location, setLocation] = useState({})
    const [univers, setUnivers] = useState("")
    const [page, setPage] = useState(1)
    const numRandom = Math.floor(Math.random() * 126)
    const cardsForPage = 5
    const lastItem = cardsForPage * page
    const firstItem = lastItem - cardsForPage
    const arrayReseidents = location.residents?.slice(firstItem, lastItem)
    const totalPages = Math.ceil(location.residents?.length / cardsForPage)
    const buttons = []

    for (let i = 1; i <= totalPages; i++) {
        buttons.push(i)
    }

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/location/${numRandom}`)
        .then(resp => {
            setLocation(resp.data)
        })
        .catch(error => console.log(error))
    }, [])

    const serchUnivers = (e) => {
        setUnivers(e.target.value)
    }

    const serch = () => [
        axios
        .get(`https://rickandmortyapi.com/api/location/${univers}`)
        .then(resp => {
            setLocation(resp.data)
        })
        .catch(error => console.log(error))
    ]

    return(
        <>
        <section className="info-dimension">
            <div className="container">
                <div className="text">
                    <p className="info-p"><span className="info-span">Name:</span> {location.name}</p>
                </div>
                <div className="text">
                    <p className="info-p"><span className="info-span">Type:</span> {location.type}</p>
                </div>
                <div className="text">
                    <p className="info-p"><span className="info-span">Dimension:</span> {location.dimension}</p>
                </div>
                <div className="text">
                    <p className="info-p"><span className="info-span">Residents:</span> {location.residents?.length}</p>
                </div>
            </div>
        </section>

        <section className="input-box">
            <form>
                <input 
                type="text"
                placeholder="    Enter an id"
                className="input"
                onChange={serchUnivers}/>
            </form>
            <button onClick={serch} className="input-btn">Serch <svg className="input-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="currentColor"><path d="M18.748 12.816c-1.74.067-3.313.688-4.154 1.53a1 1 0 1 1-1.414-1.415c1.297-1.297 3.409-2.033 5.49-2.114c2.095-.081 4.382.492 5.984 2.094a1 1 0 0 1-1.415 1.414c-1.09-1.091-2.764-1.577-4.491-1.51Z"/><path fill-rule="evenodd" d="M27.384 28.936A12.948 12.948 0 0 1 19 32c-7.18 0-13-5.82-13-13S11.82 6 19 6s13 5.82 13 13c0 3.195-1.152 6.12-3.064 8.384L31.144 27l10.284 10.284c.763.763.763 2 0 2.762l-1.382 1.382c-.763.763-2 .763-2.762 0L27 31.144l.384-2.208ZM30 19c0 6.075-4.925 11-11 11S8 25.075 8 19S12.925 8 19 8s11 4.925 11 11Zm7.249 16.933l-6.785-6.785l-1.12.195l-.196 1.121l6.805 6.805l1.296-1.336Zm.118 2.75l1.298 1.298l1.316-1.316l-1.318-1.318l-1.296 1.336Z" clip-rule="evenodd"/></g></svg></button>
        </section>

        <section className="characters">
            {
                arrayReseidents?.map(card => (
                    <ResidentInfo
                    key={card}
                    character={card}
                    />
                ))
            }
        </section>

        

        <section className="end">
            {buttons.map(button => (
                <button key={button} onClick={() => setPage(button)} className="end-btn">{button}</button>
            ))}

            <button onClick={() => setPage(totalPages)} className="end-btn"> 
                <svg className="end-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/></svg>
            </button>
        </section>
        
        </>
    )
}

export default Location