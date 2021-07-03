import React from 'react';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const About = (props) => {
    const data = useParams();
    console.log(data, props?.match?.params);
    return (
        <div>
            About
        </div>
    )
}

export default withRouter(About)