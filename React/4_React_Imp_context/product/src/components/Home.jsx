import React, { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function incComparator(product1, product2) {
    if (product1.price > product2.price) {
        return 1
    } else {
        return -1;
    }
}
function decComparator(product1, product2) {
    if (product1.price < product2.price) {
        return 1
    } else {
        return -1;
    }
}
function Home() {
    const [products, setProducts] = useState(null);
    // by default -> no sorting 
    const [searchTerm, setSearchTerm] = useState("");
    const [sortDir, setsortDir] = useState(0);
    const [categories, setCategories] = useState([]);
    const [currCategory, setCurrCategory] = useState("All categories");

    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products`)
            const productData = await resp.json();
            console.log("products", productData);
            setProducts(productData);
        })()
    }, [])

    // fetch the categories -> api -> dynmaic
    useEffect(() => {
        (async function () {
            const resp = await fetch(`https://fakestoreapi.com/products/categories`)
            const categoriesData = await resp.json();
            // console.log("products", productData);
            setCategories(categoriesData);
        })()
    }, [])
    /*************filtering -> hiding  products*************/
    let filteredArr = products;
    if (searchTerm != "") {
        filteredArr = filteredArr.filter((product) => {
            let lowerSearchTerm = searchTerm.toLowerCase();
            let lowerTitle = product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);
        })
    }
    /***********************sorting -> rearrange**********************************/
    let filteredSortedArr = filteredArr;
    if (sortDir != 0) {
        // increasing 
        if (sortDir == 1) {
            filteredSortedArr = filteredSortedArr.sort(incComparator);
        }
        //    decreasing order
        else {
            filteredSortedArr = filteredSortedArr.sort(decComparator);
        }
    }

    /**************************categorization**********************************************/
    let filteredSortedgroupByArr = filteredSortedArr;
    if (currCategory != "All categories") {
        filteredSortedgroupByArr = filteredSortedgroupByArr.filter((product) => {
            return product.category == currCategory
        })
    }




    return (
        <>
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


                {/* categorization  */}
                <div className="categories_wrapper">
                    <button className="category_option"
                        onClick={() => { setCurrCategory("All categories") }}
                    >All categories</button>
                    {/* dynamic list of categories  */}
                    {categories.map((category) => {
                        return <button className="category_option"
                            onClick={() => {
                                setCurrCategory(category)
                            }}
                        > {category}</button>
                    })}
                </div>

            </header>


            <main className="product_wrapper">
                {/* products will be there */}
                {filteredSortedgroupByArr == null ? <h3> Loading...</h3> :
                    filteredSortedgroupByArr.map((product) => {
                        return (<div className="product">
                            <img src={product.image} alt=""
                                className='product_image' />
                            <div className="product_meta">
                                <p className="product_title">{product.title}</p>
                                <p className='Price'>$ {product.price}</p>
                            </div>
                        </div>
                        )
                    })}
            </main>
        </>

    )
}

export default Home
    ;


