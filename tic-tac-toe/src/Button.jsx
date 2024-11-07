import { useState } from "react";

export default function Board({ value }) {

    function handleClick (){
        console.log('clicked');
    }
    return <button className="square" onClick={handleClick}>{value}</button>;
};
