import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Contact = (props) => {
    console.log(props);
    const data = useParams();
    const location = useLocation();
    const history = useHistory();


    console.log(data, props?.match?.params);
    return (
        <div>
            Contact {props?.match?.params?.name}
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    )
}

export default withRouter(Contact)
