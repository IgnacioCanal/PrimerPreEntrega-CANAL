import {useState, useEffect} from "react"
import { getProducts } from "../components/ItemListContainer/Productos.js"
const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)


    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false))

  },[])

  return { products, loading }


}

export default useProducts