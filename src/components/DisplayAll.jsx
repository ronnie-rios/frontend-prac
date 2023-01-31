import { useData } from '../context/dataContext'

const DisplayAll = () => {
  const { dataState, setDataState } = useData();
  
  return (
    <div>DisplayAll</div>
  )
}

export default DisplayAll