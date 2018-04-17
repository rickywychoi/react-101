import React, { Component } from 'react';

export default class Regions extends Component {

    onSelectRegion = (e, region) => {
        e.preventDefault();
        this.props.onSelectRegion(region);
    };

    render() {
        return (
            <div className="col s12 m6 l3">
                <h2 className="center-align">Region</h2>
                <div className="collection">
                    {
                        this.props.regions.map(region =>
                        <a 
                        href="#" 
                        className={this.props.region===region? "collection-item active": "collection-item"} 
                        key={region} 
                        onClick={e => this.onSelectRegion(e, region)}
                        >
                            {region}
                        </a>
                        )
                    }
                </div>
            </div>
        );
    }
}