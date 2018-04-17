import React, { Component } from 'react';
import Regions from '../components/Regions';
import WineList from '../components/WineList';
import Wine from '../components/Wine';
import * as WinesService from '../services/WinesService';

export class WineApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            regions: [],
            selectedRegion: null,
            wines: [],
            selectedWine: null
        };
    }

    componentDidMount() {
        WinesService.fetchRegions().then(regionsArray => {
            this.setState({ selectedRegion: regionsArray[0] })
            WinesService.fetchWinesFrom(this.state.selectedRegion).then(winesArray => {
                this.setState({ 
                    regions: regionsArray, 
                    wines: winesArray, 
                    selectedWine: winesArray[0] 
                })
            })
        })
    };
 
    onSelectRegion = (region) => {
        WinesService.fetchWinesFrom(region).then(winesArray => {
            this.setState({ 
                selectedRegion: region, 
                wines: winesArray, 
                selectedWine: winesArray[0] 
            })
        //     if(winesArray.length < 1){
        //         this.setState({ wines: winesArray, selectedWine: null })
        //     }else {
        //         WinesService.fetchWine(winesArray[0].id).then(wineDetail => {
        //             this.setState({ selectedWine: wineDetail })
        //         })
        //         this.setState({ wines: winesArray })
        //     }
        // })
        // this.setState({ selectedRegion: region });
        // 이렇게 하면 클릭할때마다 if check을 함 => 두번 일하게되지
        })
    };

    onSelectWine = (wine) => {
        // console.log(wine)
        WinesService.fetchWine(wine.id).then(wineDetail => {
        this.setState({ selectedWine: wineDetail });
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className="center-align">Open Wine Database</h1>
                <div className="row">
                    <Regions 
                    regions={this.state.regions} 
                    region={this.state.selectedRegion} 
                    onSelectRegion={this.onSelectRegion} 
                    />
                    <WineList 
                    wines={this.state.wines}
                    wine={this.state.selectedWine}
                    onSelectWine={this.onSelectWine}
                    />
                    <Wine 
                    wine={this.state.selectedWine}
                    />
                </div>
            </div>
        );
    }
}