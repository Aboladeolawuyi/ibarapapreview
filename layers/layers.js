ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([2.440545, 7.004157, 4.265894, 8.066394]);
var wms_layers = [];


        var lyr_OPENSTREETMAP_0 = new ol.layer.Tile({
            'title': 'OPEN STREET MAP',
            'type':'base',
            'opacity': 0.496000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_IBARAPAELEVATION_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'IBARAPA ELEVATION',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/IBARAPAELEVATION_1.png",
                                attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [2.966250, 7.329306, 3.683194, 7.820972]
                            })
                        });
var format_TOWNS_2 = new ol.format.GeoJSON();
var features_TOWNS_2 = format_TOWNS_2.readFeatures(json_TOWNS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TOWNS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOWNS_2.addFeatures(features_TOWNS_2);
var lyr_TOWNS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOWNS_2, 
                style: style_TOWNS_2,
                popuplayertitle: 'TOWNS',
                interactive: true,
                title: '<img src="styles/legend/TOWNS_2.png" /> TOWNS'
            });
var format_IBARAPA_3 = new ol.format.GeoJSON();
var features_IBARAPA_3 = format_IBARAPA_3.readFeatures(json_IBARAPA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IBARAPA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBARAPA_3.addFeatures(features_IBARAPA_3);
var lyr_IBARAPA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBARAPA_3, 
                style: style_IBARAPA_3,
                popuplayertitle: 'IBARAPA',
                interactive: true,
                title: '<img src="styles/legend/IBARAPA_3.png" /> IBARAPA'
            });
var format_IBARAPAINNERROAD_4 = new ol.format.GeoJSON();
var features_IBARAPAINNERROAD_4 = format_IBARAPAINNERROAD_4.readFeatures(json_IBARAPAINNERROAD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IBARAPAINNERROAD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBARAPAINNERROAD_4.addFeatures(features_IBARAPAINNERROAD_4);
var lyr_IBARAPAINNERROAD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBARAPAINNERROAD_4, 
                style: style_IBARAPAINNERROAD_4,
                popuplayertitle: 'IBARAPA INNER ROAD',
                interactive: true,
                title: 'IBARAPA INNER ROAD'
            });

lyr_OPENSTREETMAP_0.setVisible(true);lyr_IBARAPAELEVATION_1.setVisible(true);lyr_TOWNS_2.setVisible(true);lyr_IBARAPA_3.setVisible(true);lyr_IBARAPAINNERROAD_4.setVisible(true);
var layersList = [lyr_OPENSTREETMAP_0,lyr_IBARAPAELEVATION_1,lyr_TOWNS_2,lyr_IBARAPA_3,lyr_IBARAPAINNERROAD_4];
lyr_TOWNS_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_IBARAPA_3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_IBARAPAINNERROAD_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_TOWNS_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_IBARAPA_3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_IBARAPAINNERROAD_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_TOWNS_2.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_IBARAPA_3.set('fieldLabels', {'ID_0': 'inline label - always visible', 'ISO': 'inline label - always visible', 'NAME_0': 'inline label - always visible', 'ID_1': 'inline label - always visible', 'NAME_1': 'inline label - always visible', 'ID_2': 'inline label - always visible', 'NAME_2': 'inline label - always visible', 'TYPE_2': 'inline label - always visible', 'ENGTYPE_2': 'inline label - always visible', 'NL_NAME_2': 'inline label - always visible', 'VARNAME_2': 'inline label - always visible', });
lyr_IBARAPAINNERROAD_4.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - visible with data', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_IBARAPAINNERROAD_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});