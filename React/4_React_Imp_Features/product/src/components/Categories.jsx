import React from 'react'

function Categories(props) {
    const { categories, setCurrCategory, setPageNum

    } = props
    return (
        <>
            <button className="category_option"
                onClick={() => {
                    setCurrCategory("All categories")
                    setPageNum(1);
                }}
            >All categories</button>
            {categories.map((category) => {
                return <button className="category_option"
                    onClick={() => {
                        setCurrCategory(category);
                        setPageNum(1);

                    }}
                > {category}</button>
            })}
        </>
    )
}

export default Categories