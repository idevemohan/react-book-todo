import React, { useState, useEffect, useContext } from "react";
import { FaBook } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { BookContext } from "./BookContext";

const Book = () => {

    const { books, setBooks } = useContext(BookContext)
    const navigate = useNavigate()

    // useEffect(() =>{
    //     if(books.length >0)
    //     {
    //         navigate("home",{replace: true})
    //     }
    // },[books, navigate])



    // useEffect(() => {
    //     const storedBooks = JSON.parse(localStorage.getItem("books")) || []
    //     setBooks(storedBooks)
    // }, [])

    const handleDelete = (index) => {
        const updatedBooks = books.filter((_, i) => i !== index)
        updateLocalStorage(updatedBooks)
    }

    const updateLocalStorage = (updatedBooks) => {
        setBooks(updatedBooks)
        localStorage.setItem("books", JSON.stringify(updatedBooks))
    }

    const handleToggleRead = (index) => {
        const updatedBooks = books.map((book, i) =>
            i === index ? { ...book, read: !book.read } : book)

        updateLocalStorage(updatedBooks)
    }



    return (
        <div>
            <h1 className="text-3xl text-red-500 font-bold flex justify-center gap-2 mt-4">
                <FaBook />My Book List..
            </h1>

            {books.length > 0 ? (
                <table className="w-full border border-red-300 mt-7">
                    <thead>
                        <tr className="bg-red-100">
                            <th className="border border-red-300 p-2 text-red-500" >Title</th>
                            <th className="border border-red-300 p-2 text-red-500">Genre</th>
                            <th className="border border-red-300 p-2 text-red-500">Status</th>
                            <th className="border border-red-300 p-2 text-red-500">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-red-300 p-2 text-red-500">{book.title}</td>
                                <td className="border border-red-300 p-2 text-red-500">{book.genre}</td>
                                <td className="border border-red-300 p-2">
                                    <button
                                        onClick={() => handleToggleRead(index)}
                                        className={`px-3 py-1 rounded ${book.read
                                            ? "bg-green-500 text-white hover:bg-green-400"
                                            : "bg-gray-400 text-white hover:bg-gray-300"
                                            }`}

                                    >
                                        {book.read ? "read" : "unread"}
                                    </button>
                                </td>
                                <td className="border border-red-300 p-2">
                                    <button
                                        onClick={() => handleDelete(index)}

                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-400"

                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-xl text-center text-gray-500 mt-10">No books added yet.</p>
            )}

            <button
                onClick={() => navigate("/home")}
                className="px-4 py-2 mt-10 bg-red-500 text-white rounded"
            >
                Go Back to Home
            </button>

        </div>
    )

}

export default Book