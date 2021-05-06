// TO MAKE THE MAP APPEAR YOU MUST ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJib3ZlcnNlIiwiYSI6ImNrbXA2ODdnMzJibDAycXF1ODc2dmJtNngifQ';

// declare an async function that calls an API endpoint for dataset metadata
// takes one parameter
//   (uuid) the Dataset ID
// returns an object interpreted from the JSON response
const callApiDatasetMetadata = async (uuid) => {
    // fetch the API endpoint (GET request)
    const response = await fetch('https://api.resourcewatch.org/v1/dataset/' + uuid + '?includes=layer,metadata')
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}


// initiate a new map by passing an object describing a config
// for more info see: https://docs.mapbox.com/mapbox-gl-js/api/map/
var map = new mapboxgl.Map({
    // id of div that will hold map
    container: 'map',

    // one of the existing mapbox map styles
    style: 'mapbox://styles/mapbox/light-v10',

    // zoom in (greater = smaller area displayed)
    zoom: 2,

    // longitude, latitude of the map center
    center: [20, 0]
});


// ...
// const callApiDatasetMetadata = async (uuid) => {
// ...


// declare a function that returns the Mapbox-ready raster tile URL template
// (example.com/{x}/{y}/{z}) from the response object returned by `callApiDatasetMetadata`
// takes one parameter
//   (obj) the API response data
// returns a string representing a templated URL, ready to be used by webmaps
const getTileLayerUrlForTreeCoverLoss = (obj) => {
    // drill down to get a useful object
    const layerConfig = obj['data']['attributes']['layer'][0]['attributes']['layerConfig'];
    // get the URL template parameters
    const defaultParams = layerConfig['params_config'];

    // get the full templated URL
    let url = layerConfig['source']['tiles'][0];
    // substitute default parameters iteratively
    for (const param of defaultParams) {
        url = url.replace('{' + param['key'] + '}', 30);
    }

    var slug = obj['data']['attributes']['layer'][0]['attributes']['slug']

    return [slug, url]
}

const getTileLayerUrlForDeforestationAlerts = (obj) => {
    // drill down to get a useful object
    const layerConfig = obj['data']['attributes']['layer'][1]['attributes']['layerConfig'];

    // get the full templated URL
    let url = layerConfig['source']['tiles'][0];

    var slug = obj['data']['attributes']['layer'][1]['attributes']['slug']

    return [slug, url];
}

// declare a function that can add a raster tile layer to a Mapbox map
// takes three parameters:
//   (mapVar) the Mapbox map object
//   (title) a string identifier for the source and layer
//   (url) the raster tile URL to add to the map
const addTileLayerToMap = (mapVar, title, url) => {
    // need to first add a source
    mapVar.addSource(title, {
        'type': 'raster',
        'tiles': [
            url
        ],
        'tilesize': 10
    });
    // then add the layer, referencing the source
    mapVar.addLayer({
        'id': title,
        'type': 'raster',
        'source': title,
        'paint': {
            'raster-opacity': 0.5,  // let mapbox baselayer peak through
            'raster-contrast': 1
        }
    });
    mapVar.setLayoutProperty(
        title,
        'visibility',
        'none'
    );
    console.log(title + ' -- ' + url)
}


// ...
// var map = new mapboxgl.Map({
// ...

function update_map(cb) {
    var clickedLayer = cb.id;

    if (cb.checked){
        map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'visible'
        );
    } else {
        map.setLayoutProperty(
            clickedLayer,
            'visibility',
            'none'
        );
    }
    console.log(cb)
    console.log(cb.checked);
}



// run the API call once the map is loaded (API call is asnyc)
map.on('load', async () => {
    // declare the Dataset ID
    const datasetIdDeforestationAlert = 'bfd1d211-8106-4393-86c3-9e1ab2ee1b9b';
    const datasetIdTreeCoverLoss = 'f23a1803-ba17-4fe3-a1ad-39abfbfb56c6';
    // fetch remote dataset metadata
    var metadata = await callApiDatasetMetadata(datasetIdDeforestationAlert);
    // display the response metadata
    // get an identifier
    // get the tile layer URL from full API response data
    var tileLayer = getTileLayerUrlForDeforestationAlerts(metadata);

    var slug = tileLayer[0];
    var url = tileLayer[1];
    
    // add a layer to the map
    addTileLayerToMap(map, slug, url);

    var metadata = await callApiDatasetMetadata(datasetIdTreeCoverLoss);
    // display the response metadata
    // get an identifier
    // get the tile layer URL from full API response data
    var tileLayer = getTileLayerUrlForTreeCoverLoss(metadata);

    var slug = tileLayer[0];
    var url = tileLayer[1];

    // add a layer to the map
    addTileLayerToMap(map, slug, url);

    //addTileLayerToMap(map, 'teste', 'https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?style=purpleYellow.point')
});
