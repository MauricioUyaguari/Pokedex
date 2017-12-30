import { connect } from 'react-redux';
import ItemsDetail from './items_detail';



const mapStateToProps = (state, ownProps) => ( {
  state: state,
  item: state.entities.items[ownProps.match.params.itemId] || {}
});




export default connect(mapStateToProps, null)(ItemsDetail);
