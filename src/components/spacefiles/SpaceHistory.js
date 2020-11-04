import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchHistory} from "../../actions";
import _ from 'lodash';

class SpaceHistory extends Component {
    fetchHistory() {
        this.props.fetchHistory();
    }

    componentDidMount() {
        this.fetchHistory();
    }

    renderList() {
        // console.log("2", this.props.spaceHistory);
        return this.props.spaceHistory.map((item) => {
            return (
                <div className={`item`} key={item.id}>
                    <table className="ui celled table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Details</th>
                            <th>Flight No.</th>
                            <th>Links</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.details}</td>
                            <td>{item.flight_number}</td>
                            <td>{item.links.article}</td>
                        </tr>
                        </tbody>
                    </table>

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
        spaceHistory: Object.values(state.spaceHistory)
    }
};

export default connect(mapStateToProps, {
    fetchHistory: fetchHistory
})(SpaceHistory);