import "./readBook.css"
import Logo from "../../media/Icon.png"
import PageBook from "../../media/pageBook.png"
import React, { useState,useEffect } from "react"
import { ReactReader,ReactReaderStyle } from "react-reader"
import { useParams } from "react-router-dom"
import Profile from "../../component/profile/profile"

import {API} from "../../config/api"

function ReadBook(){

    const {id} = useParams()
    const [book,setBook]=useState({})

const getBook = async ()=>{
    try {
        const findingBook = await API.get(`/book/${id}`)
        console.log(findingBook.data.book);
        console.log(findingBook.data.book.bookFile);
        setBook(findingBook.data.book)
        console.log(book.bookFile);
    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{
    getBook()
},[])

const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
      ...ReactReaderStyle.arrow,
      color: "rgba(205, 205, 205, 0.7)",
    },
  };

    return(
        <div className="readBook">

            <div className="kiri">
                <Profile/>
            </div>

            <div className="kanan" style={{ height: "100vh", position: "relative" }} >
                <ReactReader  styles={ownStyles} url= {`http://localhost:5000/uploads/bookFile/${book.bookFile}`}/>
            </div>
        </div>
    )
}

export default ReadBook