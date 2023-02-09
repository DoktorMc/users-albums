import React, { useEffect} from 'react';
import { useDispatch, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../../../store/actions/userActions';

const UserDetailsPage = ({userDetail}) => {
  console.log('User DETAIL PAGE', userDetail);
  const dispatch = useDispatch();

  const params = useParams();
  console.log('params', params);
  useEffect(() => {
    dispatch(getUserDetails(params.id));
  }, [params.id]);

  return (
    <div> 
      <h2>USER DETAIL</h2>
      {/* <div>{userDetail.name}</div> */}
    </div>
  );
}

function mapStateToProps({userDetail}) {
  console.log('STATE TO PROPS', userDetail);
const item= userDetail
  return {
    userDetail: item
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsPage);
