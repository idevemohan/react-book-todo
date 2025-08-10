import React, { useContext, useState } from "react";
import { FaCalendar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { BookContext } from "./BookContext";

const Home = () => {

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const navigate = useNavigate()
    const {setBooks} = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (!title || !genre) return alert("Please fill all fields!")

        const newBook = {
            id: Date.now(),
            title,
            genre,
            read: false
        }
        setBooks(prev => [...prev, newBook]);

        setTitle("");
        setGenre("");
        navigate("/book");

    }

    return (
        <div className="w-96 h-80 mx-auto mt-12 bg-red-50 rounded-lg p-4">
            <h1 className="text-3xl font-bold text-red-500 flex justify-center gap-2">
                <FaCalendar />Personal Book Library
            </h1>
            <form className="mt-8 " onSubmit={handleSubmit} >
                <div className="flex items-center gap-2">
                    <label className="text-xl w-20" htmlFor="title">Title:</label>
                    <input className="flex-1 p-1 border border-gray-300" type="text" name="title" id="title" placeholder="Book Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <br />
                <div className="flex items-center gap-2">
                    <label className="text-xl w-20" htmlFor="genre">Genre:</label>
                    <select className="flex-1 p-1 border border-gray-300 rounded" name="genre" id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                    >
                        <option value="">Select Genre</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Poetry">Poetry</option>
                        
                    </select>
                </div>
                <br />
                <br />
                <button className="px-7 py-2 border rounded-lg bg-red-500 hover:bg-red-400 text-white"
                    type="submit"
                    >
                    Add
                </button>
            </form>

        </div>
    )

}

export default Home