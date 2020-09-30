import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Groserylist from "./components/GroseryList/GroseryList";


function App() {
    const [sortedBy, setSortedBy] = useState({
        all: true,
        runOut: false,
        have: false
    });
    const [products, setProducts] = useState([
        {
            title: "bread",
            img: 'https://bakingamoment.com/wp-content/uploads/2020/01/IMG_7173-white-bread-2.jpg',
            status: "ran out",
            priority: 1,
            id: 1,
            date: (new Date()).toString()
        },
        {
            title: "pasta",
            img: 'https://www.thespruceeats.com/thmb/VLh5vtQn9PE_rvbQQbe8BLOzjQk=/2576x2576/smart/filters:no_upscale()/pasta-variation-185065945-5835eed83df78c6f6ad25978.jpg',
            status: "have",
            priority: 4,
            id: 2,
            date: (new Date()).toString()
        },
        {
            title: "bread",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR65y9o3RD03LvgiYfM0ECHEXRfAusTphBkcQ&usqp=CAU',
            status: "ran out",
            priority: 5,
            id: 3,
            date: (new Date()).toString()
        },
        {
            title: "meat",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUm95Q_ut6cAwah0Al1bL6qdVmFXVOK-S2dw&usqp=CAU',
            status: "ran out",
            priority: 2,
            id: 4,
            date: (new Date()).toString()
        }
    ]);

    const setAllToTrueSearch = () => {
        setSortedBy({
            all: true,
            runOut: false,
            have: false
        })
    };
    const setRunOutToTrueSearch = () => {
        setSortedBy({
            all: false,
            runOut: true,
            have: false
        })
    };
    const setHaveToTrueSearch = () => {
        setSortedBy({
            all: false,
            runOut: false,
            have: true
        })
    };
    const deleteProduct = (id) => {
        setProducts(products.filter(el => {
            if(el.id === id){
                return false
            }
            return true
        }))
    };

    const toggleAvaliable = (id) => {
        let newStore = products.map(el => {
            if(el.id === id){
                return {
                    ...el,
                    status: el.status === "have" ? "ran out" : "have",
                    date: (new Date()).toString()
                }
            }
            return el
        });
        setProducts(newStore);
    };

    const addNewProduct = (obj) => {
        let newProd = products.slice();
        newProd.push(obj);
        setProducts(newProd)
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Route path=''
                       render={() => <Groserylist addNewProduct={addNewProduct} toggleAvaliable={toggleAvaliable} deleteProduct={deleteProduct} products={products} setHaveToTrueSearch={setHaveToTrueSearch}
                                                  setRunOutToTrueSearch={setRunOutToTrueSearch}
                                                  setAllToTrueSearch={setAllToTrueSearch}
                                                  sortedBy={sortedBy}/>}/>

            </div>
        </BrowserRouter>

    );
}

export default App;
