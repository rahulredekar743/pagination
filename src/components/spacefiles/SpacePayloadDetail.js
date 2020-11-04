import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FETCH_PAYLOADS} from "../../actions/types";
import {Link} from "react-router-dom";

class SpacePayloadDetail extends Component {
    renderSpaceDetails() {
        // console.log(this.props.match.params.id);
        return this.props.spacePayload.map((item) => {
            if (item.payload_id === this.props.match.params.id) {
                console.log(item.payload_id)
                return (
                    <div key={item.payload_id}>
                        <h4 className="ui horizontal divider header">
                            {item.payload_id} Details
                        </h4>
                        <table className="ui definition table">
                            <tbody>
                            <tr>
                                <td>Satellite Name</td>
                                <td>{item.payload_id}</td>
                            </tr>
                            <tr>
                                <td className="two wide column">Customers</td>
                                <td>
                                    {item.customers}
                                </td>
                            </tr>
                            <tr>
                                <td>Manufacturer</td>
                                <td>{item.manufacturer ? item.manufacturer : 'No Data'}</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>{item.nationality ? item.nationality : 'No Data'}</td>
                            </tr>
                            <tr>
                                <td>Payload In Kg</td>
                                <td>{(item.payload_mass_kg ? item.payload_mass_kg : 'No Data')}</td>
                            </tr>
                            <tr>
                                <td>Payload Type</td>
                                <td>{item.payload_type}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
        })
    }

    render() {
        console.log(this.props.spacePayload);
        return (
            <div>
                {this.renderSpaceDetails()}
                <Link to={`/spacepayloads`} className="ui primary button" style={{marginTop: '20px'}}>
                    Back
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // spacePayload: state.spacePayload[ownProps.match.params.payload_id]
        spacePayload: Object.values(state.spacePayload)
    }
};

export default connect(mapStateToProps, null)(SpacePayloadDetail);