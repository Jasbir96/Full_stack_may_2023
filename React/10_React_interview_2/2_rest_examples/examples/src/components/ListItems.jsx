const ListItems = ({ items, handleDelete }) => {


    return (
        <>
            {
                items.map((item, index) => {
                    return <li key={`item-${index + 1}`}>
                        {item.name}
                        <button onClick={() => handleDelete(item.id)}>delete</button>
                    </li>
                })
            }

        </>
    )
}

export default ListItems;