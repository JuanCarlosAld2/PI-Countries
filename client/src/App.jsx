import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom'
import {allCharacters,allactivities} from './redux/actions'
import Cards from './components/Cards';
import Detail from './components/Detail';
import SearchBar from './components/SearchBar';
import Countries from './components/Countries';
import Login from './components/login';
import NewActiviti from './components/NewActiviti';
import { getAccess } from "./services/apiService";


//variable para delimitar el numero de cartas en home 
const ITEMS_COUN_PAGE=10;
function App() {

  const allCountries = useSelector((state)=>state.allCountries);//estado global

 
  const dispatch = useDispatch();
  const {pathname}= useLocation();
  const navigate = useNavigate();

  const [items,setItems] = useState([]);
  const [currentPage,setCurrentPage]=useState(0);

  const [access,setAccess] =useState(false);


async function login(userData) {
  let Access = await getAccess(userData.password, userData.email)
  if(Access){
    setAccess(Access)
    navigate('/home')
  }
  console.log(Access);
 
}
  
useEffect(() => {
   !access && navigate('/');
}, [access]);
 

  useEffect(()=>{
    dispatch(allCharacters())
    dispatch(allactivities())
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
    // console.log(firstIndex);
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


  return (
    <div>
      {
        pathname === "/" ? null : <SearchBar/>
      }
      
      <Routes>
        <Route path={'/'} element={<Login login={login} />}></Route>
        <Route path={'/home'} element={<Cards allCountries={items} nextHandler={nextHandler} prevHandler={prevHandler} currentPage={currentPage}/>  }></Route>
        <Route path={'/detail/:id'} element={<Detail/>}></Route>
        <Route path={'/countries'} element={<Countries/>}></Route>
        <Route path={'/activiti'} element={<NewActiviti/>}></Route>
      </Routes>
      
     
    </div>
  )
}

export default App






/// funciones funcionales pero ya no se usan 

//Borrar funcion para ingresar en crudo 

  // const EMAIL = 'juan@gmail.com';
  // const PASSWORD = 'juan123';

  //   function login(userData) {
  //     if (userData.password === PASSWORD && userData.email === EMAIL) {
  //        setAccess(true);
  //        navigate('/home');
  //     }
  //  }