import React, { Component} from 'react';

export default class Wine extends Component {

    render() {
        if (!this.props.wine) {
            return null;
        }
        //처음에 ReactDom.render(<WineApp />이 되고 WineApp.js에서 constructor에 기본 props.wine이 set되어있지 않기 때문에)
        return (
            <div className="col s12 m12 l6">
                <h2 className="center-align">Wine details</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img className="responsive-img wine-detail-image" alt="Wine bottle pic" src={`https://wines-api.herokuapp.com/api/wines/${this.props.wine.id}/image`}/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>{this.props.wine.name}</h3>
                            <br/>
                            <p><b>Appellation:</b> {this.props.wine.appellation.name}</p>
                            <p><b>Region:</b> {this.props.wine.appellation.region}</p>
                            <p><b>Color:</b> {this.props.wine.type}</p>
                            <p><b>Grapes:</b> {this.props.wine.grapes.join(", ")}</p>
                        </div>
                        <div className="card-action">
                            <span>
                                <a className="waves-effect waves-teal btn-flat">
                                    <span><i className="material-icons left">thumb_up</i> Like (42)</span>
                                </a>
                                <a className="waves-effect waves-teal btn-flat">
                                    <span><i className="material-icons">comment</i>Comment</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}