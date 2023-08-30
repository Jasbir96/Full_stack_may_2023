import React, { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ProductList from './ProductList';
import Categories from './Categories';
import basicOps from './utility/basicOps';


function Home() {
    /***single source of truth for all the products***/
    const [products, setProducts] = useState(null);
    /************ all the categories -> a product**********/
    const [categories, setCategories] = useState([]);
    /**********Action***********/
    /*********************** state ->term with which you want to filter the product list*****************************/
    const [searchTerm, setSearchTerm] = useState("");
    /**************************sort : 0 : unsorted , 1: incresing order , -1 : decreasing order ************************************/
    const [sortDir, setsortDir] = useState(0);
    /**************************** currcategory : category group you result **********************************/
    const [currCategory, setCurrCategory] = useState("All categories");
    // page num and page size
    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(4);
    /****************get all the products*********************/
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products`)
            const productData = await resp.json();
            console.log("products", productData);
            setProducts(productData);
        })()
    }, [])

    /**************getting all the categroies ********************/
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products/categories`)
            const categoriesData = await resp.json();
            // console.log("products", productData);
            setCategories(categoriesData);
        })()
    }, [])

    const filteredSortedgroupByArr = basicOps(products, searchTerm, sortDir, currCategory, pageNum, pageSize);
    return (
        <>
            {/* header */}
            <header className="nav_wrapper">
                <div className="search_sortWrapper">
                    <input
                        className='search_input'
                        type="text"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }} />
                    <div className="icons_container">
                        <ArrowCircleUpIcon
                            style={{ color: "white" }}
                            fontSize="large"
                            onClick={() => { setsortDir(1) }}
                        ></ArrowCircleUpIcon>
                        <ArrowCircleDownIcon
                            fontSize="large"
                            style={{ color: "white" }}
                            onClick={() => { setsortDir(-1) }}
                        ></ArrowCircleDownIcon>
                    </div>
                </div>

                <div className="categories_wrapper">
                    <Categories categories={categories}
                        setCurrCategory={setCurrCategory}
                    ></Categories>
                </div>

            </header>

            {/* main area  */}
            <main className="product_wrapper">
                {/* products will be there */}
                <ProductList productList={filteredSortedgroupByArr}> ̰</ProductList>
            </main>
        </>

    )
}

export default Home;


