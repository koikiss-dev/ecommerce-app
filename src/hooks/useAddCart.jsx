import {useState} from 'react'

const useAddCart = () => {
  const [data, setData] = useState()
  const [add, setAdd] = useState(0)
  const addValue = ()=>{
    setAdd(add + 1)
  }
  const desValue = ()=>{
    setAdd(add - 1)
  }
  /* const addCart = (item) => {
    setData(item)
    console.log(data)
  } */
  return [addValue, desValue, add, setData, data]
}

export default useAddCart
