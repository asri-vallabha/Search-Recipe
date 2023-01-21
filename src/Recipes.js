import React from 'react'

function Recipes({data}) {
  return (
    <div>
      <div className='row'>
        {data.map(data=>
        <div className='col-md-4'>
          <div className='card' style={{'width': '18rem'}}>
            <img className='card-img-top' src={data.recipe.image} alt='Card cap'/>
            <div className='card-body'>
              <center>
                <h5 className='card-title'>{data.recipe.label}</h5>
                <p className='card-text'>Total Amout Of Calories:{Math.round(data.recipe.calories)}</p>
                <a href='#'class="btn btn-success" >Buy</a>
              </center>
            </div>
          </div>
        </div>
          )}
      </div>
    </div>
  )
}

export default Recipes
