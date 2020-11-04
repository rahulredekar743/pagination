import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={`ui secondary pointing menu`}>
            <Link to={`/`} className={`item`}>
                SpaceX
            </Link>
            <div className={`menu`}>
                <Link to={`/spacehistory`} className={`item`}>
                    History
                </Link>
            </div>
            <div className={`menu`}>
                <Link to={`/spacepayloads`} className={`item`}>
                    Payloads
                </Link>
            </div>
        </div>
    )
};

export default Header;