import React, { Component } from 'react';

export default class WineList extends Component {

    onSelectWine = (e, wine) => {
        e.preventDefault();
        this.props.onSelectWine(wine);
    };

    render() {
        // if(this.props.wines.length < 1){
        //     return null;
        // }
        return (
            <div className="col s12 m6 l3">
                <h2 className="center-align">Wines</h2>
                <div className="collection">
                    {
                        this.props.wines.map(wine =>
                        <a 
                        href="#" 
                        className={this.props.wine && this.props.wine.id===wine.id? "collection-item active": "collection-item"}
                        key={wine.id} 
                        onClick={e => this.onSelectWine(e, wine)}
                        >
                            {wine.name}
                        </a>
                        )
                    }
                </div>
            </div>
        );
    }
}