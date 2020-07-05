
import React, { Component } from 'react'
import 'antd/dist/antd.css'; 
import esriLoader from 'esri-loader'
export default class GisMapper extends Component {

    componentDidMount() {

        const options = {
            url: 'https://js.arcgis.com/4.15/init.js', 
            css: 'https://js.arcgis.com/4.15/esri/themes/light/main.css'
        };
        esriLoader.loadModules([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/CSVLayer"
    ], options).then(([Map, MapView, CSVLayer]) =>{
        // var need to be get from backend
        var csvUrl = this.props.fileName;
        var csvFieldInfos = [
            {
                fieldName: "Temperature",
                label: "温度"
            },
            {
                fieldName: "Depth",
                label: "深度"
            }
        ];
        var title = "Wave";
        const warning = "Temperature > 30";



        var map = new Map({
            basemap: "topo-vector"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-118.80500, 34.02700],
            zoom: 13
        });

        var myLayer = new CSVLayer({
            url: csvUrl,
            popupTemplate: {
                title: title,
                content: [
                    {
                        type: "fields",
                        fieldInfos: csvFieldInfos
                    }
                ]
            },
            renderer: {
                type: "simple",
                symbol: {
                    type: "simple-marker",
                    size: 6,
                    color: "red",
                    outline: {
                        width: 0.5,
                        color: "white"
                    }
                }
            },
        });

        map.add(myLayer);

        // filter
        var filterSql = [
            {
                label: "所有",
                value: ""
            },
            {
                label: "可能发生危害",
                value: warning
            }
        ];
        var filter = document.createElement("select");
        filter.setAttribute("class", "esri-widget esri-select");
        filter.setAttribute("style", "width: 275px; font-family: Avenir Next W00; font-size: 1em;");
        filterSql.forEach(function (sqlPair) {
            var option = document.createElement("option");
            option.innerHTML = sqlPair.label;
            option.value = sqlPair.value;
            filter.appendChild(option);
        });
        view.ui.add(filter, "top-right");
        function setCSVLayerViewFilter(expr) {
            myLayer.definitionExpression = expr;
        }
        filter.addEventListener('change', function (event) {
            setCSVLayerViewFilter(event.target.value);
        });
    });
}

  render() {
    return (

    <div id="viewDiv" style={{height:"80%",width:"80%",zIndex:"99999",position:"absolute"}}>
    </div>
    );
  }

}

