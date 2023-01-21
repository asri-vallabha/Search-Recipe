import React from 'react'
import Recipes from './Recipes'
function App() {
  const[search, setSearch]=React.useState('')
  const [data,setData]=React.useState([])
  const YOUR_APP_ID = "e2b3c462"
  const YOUR_APP_KEY ="54295bf540f01d05f89ef19f4cc7a274"

  const handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits))
  }
  return (
    <div>
      <center>
      <h2>Search Recipe Here</h2>
      <form class="row gx-2 gy-0 align-items-center" onSubmit={handleSubmit}>
        <center>
  <div class="col-sm-3">
    <input type="text" class="form-control" value={search} onChange={(e)=>setSearch(e.target.value)} />
  </div>
  </center>
  <center>
  <div class="col-sm-3"><br/>
  <div>{/*  class="input-group" */}
      <input type="submit" value="Search" className="col-sm-10 btn btn-success"/>
    </div>
    </div>
    </center>
    </form>
      {/* <form onSubmit={handleSubmit}>
        <input type='text'  className="col-sm-19 form-control"  value={search} onChange={(e)=>setSearch(e.target.value)} /><br/>
        <input type='submit' className="col-sm-2 btn btn-success" value='Search'/>
      </form> */}
      {
        data.length >=1 ? <Recipes data={data}/>:null
      }
     
      </center>
      
    </div>
  );
}

export default App;
