import React from 'react'
import ListIterator from '../utils/ListIterator'

const Navlist = () => {
    const nav_items = ["home", "about", "contact", "reference"]

    return (
        <div className="w-[50%] h-full flex ml-auto">
            <ul className="w-[75%] h-full flex items-center justify-evenly text-xl font-semibold capitalize text-blue-700">
                <ListIterator list={nav_items} />
            </ul>
        </div>
    )
}

export default Navlist
