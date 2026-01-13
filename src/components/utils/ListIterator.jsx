import { Link } from "react-router-dom"

const ListIterator = ({list}) => {
  return (
    <>
    {
        list.map((ele,index)=>{
            return <li key={index+1} className="cursor-pointer hover:text-yellow-400">
                <Link to={`/${ele}`}>{ele}</Link>
            </li>
        })
    }
    </>
  )
}

export default ListIterator