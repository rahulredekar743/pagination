import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPayloads} from "../../actions";

class SpacePayloads extends Component {
    fetchPayloads() {
        this.props.fetchPayloads();
    }

    componentDidMount() {
        this.fetchPayloads();
    }

    renderButton(item) {
        return (
            <div className={`right floated content`}>
                <Link to={`/spacePayload/details/${item.payload_id}`} className={`ui button primary`}>View</Link>
            </div>
        )
    }

    renderList() {
        // console.log(this.props.spacePayload)
        return this.props.spacePayload.map((item) => {
            return (
                <div className={`item`} key={item.payload_id}>
                    {this.renderButton(item)}
                    <div className={`content`} style={{marginTop: '10px'}}>
                        {item.payload_id}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={`item`} key={`1`}>
                <div className={`ui celled list`}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        spacePayload: Object.values(state.spacePayload)
    }
};

export default connect(
    mapStateToProps,
    {fetchPayloads: fetchPayloads}
)
(SpacePayloads);