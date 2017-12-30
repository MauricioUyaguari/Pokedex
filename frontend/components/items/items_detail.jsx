import React from 'react';

class ItemsDetail extends React.Component {

  constructor(props){
    super(props);

  }


  render(){




    const { id, name, pokemon_id, price, happiness, image_url} = this.props.item;

    return(
      <div> Item Information
        <ul>
          <li> Name: {name}</li>
          <li> Price: {price}</li>
          <li> Happiness: {happiness}</li>
        </ul>
      </div>

    )
  }


}


export default ItemsDetail;
