import "./App.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table } from "react-bootstrap"

function App(props) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://ebook-backend4.herokuapp.com/books"
      )
      setBooks(result.data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header />
      <br />
      <div className="container">
        <div className="row">
          {books.data ? (
            books.data.map((book, index) => {
              return (
                <div className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <img
                      className="card-img-top img-thumbnail"
                      src={book.image}
                      alt={book.title}
                      data-holder-rendered="true"
                    />
                    <div className="card-header">
                      <h4>{book.title}</h4>
                    </div>
                    <div className="card-body">
                      <Table>
                        <tbody>
                          <tr>
                            <td>Author</td>
                            <td>4dsec</td>
                          </tr>
                          <tr>
                            <td>Description</td>
                            <td>{book.description.substring(0, 250)}......</td>
                          </tr>
                          {/* <tr>
                            <td>Price</td>
                            <td>600k</td>
                          </tr>
                          <tr>
                            <td>Rating</td>
                            <td>4.5</td>
                          </tr> */}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <p>Tidak Ada Buku Untuk Saat Ini</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
