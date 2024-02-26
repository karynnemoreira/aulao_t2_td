import React from "react"
import Img1 from "./imagensMain/img1.jpg"
import Img2 from "./imagensMain/img2.jpeg"
import Img3 from "./imagensMain/img3.jpg"
import "./Main.css"

function Main(){
    return(
        <main>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        </main>
    )
}

export default Main