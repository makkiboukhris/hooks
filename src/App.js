import React,{useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MovieCard from './components/MovieCard'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PrimarySearchAppBar from './components/header'
function App() {
  const [KeyRate, setKeyRate] = useState("");
  const [Keyword, setKeyword] = useState("");
  const [AllowAdd, setAllowAdd] = useState(false)
  const [Value, setValue] = useState(0);
  const [Movies, setMovies] = useState([])
  const [MovieName, setMovieName] = useState("")
  const [ImageURL, setImageURL] = useState("")
  const [Descript, setDescript] = useState("")
  // function declaration
  const Search=(x)=>{
    setKeyword(x)
  }
  const SearchRate=(x)=>{
    setKeyRate(x)
  }
  const CahngeAllowAdd = (event)=>{
    setAllowAdd(!AllowAdd)
  }
  const StoreName = (event) =>{
    setMovies([...Movies,{ MovName:MovieName , imgUrl:ImageURL , description:Descript , Rating:Value }])
    setMovieName("")
    setImageURL("")
    setDescript("")
    setValue(0)
    setAllowAdd(!AllowAdd)
  }
  return (
    <div className="App">
      <PrimarySearchAppBar Search={Search} SearchRate={SearchRate} />
      <Button
        onClick={CahngeAllowAdd}
        variant="contained"
        color="default"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
      <div className={(AllowAdd===true)?"display":"none"} >
      <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" value={MovieName} onChange={event => setMovieName(event.target.value)} placeholder="Film Name" />
      <TextField id="standard-basic" label="Standard" value={ImageURL} onChange={event => setImageURL(event.target.value)} placeholder="Image URL" />
      <TextField id="standard-basic" label="Standard" value={Descript} onChange={event => setDescript(event.target.value)} placeholder="Description" />
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating</Typography>
        <Rating
            name="simple-controlled"
            value={Value}
            onChange={(event, newValue) => {
            setValue(newValue);
        }}
        />
        </Box>
        <Button
        onClick={StoreName}
        variant="contained"
        color="primary"
        endIcon={<CloudUploadIcon />}
      >
        Send
      </Button>
      </form>
      </div>
      <div>
      
      <MovieCard list={Movies}  Keyword={Keyword}  KeyRate={KeyRate} />
      
      </div>
    </div>
  );
}

export default App;
