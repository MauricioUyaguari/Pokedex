import { connect } from 'react-redux';
import ItemsDetail from './items_detail';



const mapStateToProps = (state, ownProps) => ( {
  state: state
});




export default connect(mapStateToProps, null)(ItemsDetail);
