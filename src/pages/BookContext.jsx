import {createContext,useEffect,useState} from "react"

export const BookContext= createContext({
    books: [],
    setBooks: () => {}
})

export const BookProvider= ({children}) => {
    const [books,setBooks] =useState (() => {
        const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
    });

    useEffect(() =>{
        localStorage.setItem("books", JSON.stringify(books));
    },[])

    return(
        <BookContext.Provider value={{books,setBooks}} >
               {children}
        </BookContext.Provider>
    )
}