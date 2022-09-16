import React from "react";

import blackCabFront from "../Assets/Images/1.webp"
import blackCabRear from "../Assets/Images/2.webp"
import blackCabEngine from "../Assets/Images/3.webp"
import blackCabInterior from "../Assets/Images/4.webp"
import yellowCoupe from "../Assets/Images/5.webp"
import yellowCoupeRear from "../Assets/Images/6.webp"
import yellowCoupeSide from "../Assets/Images/7.webp"
import yellowCoupeInterior from "../Assets/Images/8.webp"
import yellowCoupeEngine from "../Assets/Images/9.webp"
import blackTurboFront from "../Assets/Images/10.webp"
import blackTurboRear from "../Assets/Images/11.webp"
import blackTurboSide from "../Assets/Images/12.webp"
import blackTurboSeats from "../Assets/Images/13.webp"
import blackTurboEngine from "../Assets/Images/14.webp"
import speedster from "../Assets/Images/15.webp"
import speedsterRear from "../Assets/Images/16.webp"
import speedsterRearQuarter from "../Assets/Images/17.webp"
import speedsterInterior from "../Assets/Images/18.webp"
import speedsterSeats from "../Assets/Images/19.webp"
import speedsterEngine from "../Assets/Images/20.webp"
import turboOlive from "../Assets/Images/21.webp"
import turboOliveRear from "../Assets/Images/22.webp"
import turboOliveQuarter from "../Assets/Images/23.webp"
import turboOliveSeats from "../Assets/Images/24.webp"
import turboOliveInterior from "../Assets/Images/25.webp"
import turboOliveEngine from "../Assets/Images/26.webp"
import whiteCab from "../Assets/Images/27.webp"
import whiteCabSide from "../Assets/Images/28.webp"
import whiteCabRear from "../Assets/Images/29.webp"
import whiteCabInterior from "../Assets/Images/30.webp"
import whiteCabInteriorAlt from "../Assets/Images/31.webp"


export default function ForSaleImages () {
    const forSaleArr = [
        <img src={blackCabFront} />,
        <img src={blackCabRear} />,
        <img src={blackCabEngine} />,
        <img src={blackCabInterior} />,
        <img src={yellowCoupe} />,
        <img src={yellowCoupeRear} />,
        <img src={yellowCoupeSide} />,
        <img src={yellowCoupeInterior} />,
        <img src={yellowCoupeEngine} />, 
        <img src={blackTurboFront} />,
        <img src={blackTurboRear} />,
        <img src={blackTurboSide} />,
        <img src={blackTurboSeats} />, 
        <img src={blackTurboEngine} />,
        <img src={speedster} />,
        <img src={speedsterRear} />,
        <img src={speedsterRearQuarter} />, 
        <img src={speedsterInterior} />,
        <img src={speedsterSeats} />,
        <img src={speedsterEngine} />,
        <img src={turboOlive} />, 
        <img src={turboOliveRear} />,
        <img src={turboOliveQuarter} />,
        <img src={turboOliveSeats} />,
        <img src={turboOliveInterior} />,
        <img src={turboOliveEngine} />, 
        <img src={whiteCab} />,
        <img src={whiteCabSide} />,
        <img src={whiteCabRear} />,
        <img src={whiteCabInterior} />,
        <img src={whiteCabInteriorAlt} />,
    ];

    let returnForSalePng = forSaleArr.map((image) => {
        return image[1];
    });

    return <div className="turbo-model-png">{returnForSalePng}</div>;
}