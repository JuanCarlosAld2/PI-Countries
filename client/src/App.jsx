import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Routes,Route} from 'react-router-dom'
import {allCharacters} from './redux/actions'
import Cards from './components/Cards';
import Detail from './components/Detail';



const ITEMS_COUN_PAGE=10;
function App() {

  const allCountries = useSelector((state)=>state.allCountries);//estado global
  const dispatch = useDispatch();

  const [items,setItems] = useState([])
  const [currentPage,setCurrentPage]=useState(0)

 

  useEffect(()=>{
    dispatch(allCharacters())
  },[dispatch])

  useEffect(() => {
    if (allCountries.length > 0) {
      setItems([...allCountries].splice(0, ITEMS_COUN_PAGE));
    }
  }, [allCountries]);

  const nextHandler = () =>{
    const totalElementos = allCountries.length;
    const nextPage = currentPage + 1
    const firstIndex = nextPage * ITEMS_COUN_PAGE;
    console.log(firstIndex);
    if(firstIndex === totalElementos)return;
    setItems([...allCountries].splice(firstIndex,ITEMS_COUN_PAGE))
    setCurrentPage(nextPage)

  }

  const prevHandler = () =>{
    const prevPage= currentPage - 1; 
    if (prevPage < 0) return
    const firstIndex = prevPage * ITEMS_COUN_PAGE
    setItems([...allCountries].splice(firstIndex,ITEMS_COUN_PAGE))
    setCurrentPage(prevPage)
  }

//console.log(allCountries);
  return (
    <div>
      <Routes>
        <Route path={'/home'} element={<Cards allCountries={items} nextHandler={nextHandler} prevHandler={prevHandler} currentPage={currentPage}/>  }></Route>

        <Route path={'/detail/:id'} element={<Detail/>}></Route>
      </Routes>
      
      
     
    </div>
  )
}

export default App
