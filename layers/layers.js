ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4686").setExtent([-73.907910, 10.872934, -70.559695, 12.492612]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_URIBIA_1 = new ol.format.GeoJSON();
var features_URIBIA_1 = format_URIBIA_1.readFeatures(json_URIBIA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_URIBIA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_URIBIA_1.addFeatures(features_URIBIA_1);
var lyr_URIBIA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_URIBIA_1, 
                style: style_URIBIA_1,
                popuplayertitle: 'URIBIA',
                interactive: false,
    title: 'URIBIA<br />\
    <img src="styles/legend/URIBIA_1_0.png" /> URIBIA<br />' });
var format_MAICAO_2 = new ol.format.GeoJSON();
var features_MAICAO_2 = format_MAICAO_2.readFeatures(json_MAICAO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_MAICAO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAICAO_2.addFeatures(features_MAICAO_2);
var lyr_MAICAO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAICAO_2, 
                style: style_MAICAO_2,
                popuplayertitle: 'MAICAO',
                interactive: false,
    title: 'MAICAO<br />\
    <img src="styles/legend/MAICAO_2_0.png" /> MAICAO<br />' });
var format_RIOACHA_3 = new ol.format.GeoJSON();
var features_RIOACHA_3 = format_RIOACHA_3.readFeatures(json_RIOACHA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_RIOACHA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOACHA_3.addFeatures(features_RIOACHA_3);
var lyr_RIOACHA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOACHA_3, 
                style: style_RIOACHA_3,
                popuplayertitle: 'RIOACHA',
                interactive: false,
    title: 'RIOACHA<br />\
    <img src="styles/legend/RIOACHA_3_0.png" /> RIOHACHA<br />' });
var format_MANAURE_4 = new ol.format.GeoJSON();
var features_MANAURE_4 = format_MANAURE_4.readFeatures(json_MANAURE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_MANAURE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANAURE_4.addFeatures(features_MANAURE_4);
var lyr_MANAURE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANAURE_4, 
                style: style_MANAURE_4,
                popuplayertitle: 'MANAURE',
                interactive: false,
    title: 'MANAURE<br />\
    <img src="styles/legend/MANAURE_4_0.png" /> MANAURE<br />' });
var format_Km61VIA_5 = new ol.format.GeoJSON();
var features_Km61VIA_5 = format_Km61VIA_5.readFeatures(json_Km61VIA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km61VIA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km61VIA_5.addFeatures(features_Km61VIA_5);
var lyr_Km61VIA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km61VIA_5, 
                style: style_Km61VIA_5,
                popuplayertitle: 'Km 61 VIA',
                interactive: true,
                title: '<img src="styles/legend/Km61VIA_5.png" /> Km 61 VIA'
            });
var format_Km61SSCastellanos_6 = new ol.format.GeoJSON();
var features_Km61SSCastellanos_6 = format_Km61SSCastellanos_6.readFeatures(json_Km61SSCastellanos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km61SSCastellanos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km61SSCastellanos_6.addFeatures(features_Km61SSCastellanos_6);
cluster_Km61SSCastellanos_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Km61SSCastellanos_6
});
var lyr_Km61SSCastellanos_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Km61SSCastellanos_6, 
                style: style_Km61SSCastellanos_6,
                popuplayertitle: 'Km 61 SS Castellanos',
                interactive: true,
    title: 'Km 61 SS Castellanos<br />\
    <img src="styles/legend/Km61SSCastellanos_6_0.png" /> Km 0+000<br />\
    <img src="styles/legend/Km61SSCastellanos_6_1.png" /> Km 1+060<br />' });
var format_JASHIIKIRU_7 = new ol.format.GeoJSON();
var features_JASHIIKIRU_7 = format_JASHIIKIRU_7.readFeatures(json_JASHIIKIRU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_JASHIIKIRU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JASHIIKIRU_7.addFeatures(features_JASHIIKIRU_7);
cluster_JASHIIKIRU_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_JASHIIKIRU_7
});
var lyr_JASHIIKIRU_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_JASHIIKIRU_7, 
                style: style_JASHIIKIRU_7,
                popuplayertitle: 'JASHIIKIRU',
                interactive: true,
                title: '<img src="styles/legend/JASHIIKIRU_7.png" /> JASHIIKIRU'
            });
var format_Km35VIA_8 = new ol.format.GeoJSON();
var features_Km35VIA_8 = format_Km35VIA_8.readFeatures(json_Km35VIA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km35VIA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km35VIA_8.addFeatures(features_Km35VIA_8);
var lyr_Km35VIA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km35VIA_8, 
                style: style_Km35VIA_8,
                popuplayertitle: 'Km 35 VIA',
                interactive: true,
                title: '<img src="styles/legend/Km35VIA_8.png" /> Km 35 VIA'
            });
var format_Km35SSCastellanos_9 = new ol.format.GeoJSON();
var features_Km35SSCastellanos_9 = format_Km35SSCastellanos_9.readFeatures(json_Km35SSCastellanos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km35SSCastellanos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km35SSCastellanos_9.addFeatures(features_Km35SSCastellanos_9);
cluster_Km35SSCastellanos_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Km35SSCastellanos_9
});
var lyr_Km35SSCastellanos_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Km35SSCastellanos_9, 
                style: style_Km35SSCastellanos_9,
                popuplayertitle: 'Km 35 SS Castellanos',
                interactive: true,
    title: 'Km 35 SS Castellanos<br />\
    <img src="styles/legend/Km35SSCastellanos_9_0.png" /> Km 0+ 000<br />\
    <img src="styles/legend/Km35SSCastellanos_9_1.png" /> Km 0+540<br />\
    <img src="styles/legend/Km35SSCastellanos_9_2.png" /> VASO COMUNICANTE<br />' });
var format_SCHIMUN_10 = new ol.format.GeoJSON();
var features_SCHIMUN_10 = format_SCHIMUN_10.readFeatures(json_SCHIMUN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_SCHIMUN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHIMUN_10.addFeatures(features_SCHIMUN_10);
cluster_SCHIMUN_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SCHIMUN_10
});
var lyr_SCHIMUN_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SCHIMUN_10, 
                style: style_SCHIMUN_10,
                popuplayertitle: 'SCHIMUN',
                interactive: true,
                title: '<img src="styles/legend/SCHIMUN_10.png" /> SCHIMUN'
            });
var format_Km18VIA_11 = new ol.format.GeoJSON();
var features_Km18VIA_11 = format_Km18VIA_11.readFeatures(json_Km18VIA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km18VIA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km18VIA_11.addFeatures(features_Km18VIA_11);
var lyr_Km18VIA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km18VIA_11, 
                style: style_Km18VIA_11,
                popuplayertitle: 'Km 18 VIA',
                interactive: true,
                title: '<img src="styles/legend/Km18VIA_11.png" /> Km 18 VIA'
            });
var format_Km18SSValencia_12 = new ol.format.GeoJSON();
var features_Km18SSValencia_12 = format_Km18SSValencia_12.readFeatures(json_Km18SSValencia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km18SSValencia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km18SSValencia_12.addFeatures(features_Km18SSValencia_12);
var lyr_Km18SSValencia_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km18SSValencia_12, 
                style: style_Km18SSValencia_12,
                popuplayertitle: 'Km 18 SS Valencia',
                interactive: true,
    title: 'Km 18 SS Valencia<br />\
    <img src="styles/legend/Km18SSValencia_12_0.png" /> Km 0+000<br />\
    <img src="styles/legend/Km18SSValencia_12_1.png" /> Km 0+452,52<br />\
    <img src="styles/legend/Km18SSValencia_12_2.png" /> VASO COMUNICANTE<br />' });
var format_KM18MECHUAMANAMULIATUY_13 = new ol.format.GeoJSON();
var features_KM18MECHUAMANAMULIATUY_13 = format_KM18MECHUAMANAMULIATUY_13.readFeatures(json_KM18MECHUAMANAMULIATUY_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_KM18MECHUAMANAMULIATUY_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KM18MECHUAMANAMULIATUY_13.addFeatures(features_KM18MECHUAMANAMULIATUY_13);
cluster_KM18MECHUAMANAMULIATUY_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KM18MECHUAMANAMULIATUY_13
});
var lyr_KM18MECHUAMANAMULIATUY_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KM18MECHUAMANAMULIATUY_13, 
                style: style_KM18MECHUAMANAMULIATUY_13,
                popuplayertitle: 'KM 18 MECHUAMANA- MULIATUY',
                interactive: true,
                title: '<img src="styles/legend/KM18MECHUAMANAMULIATUY_13.png" /> KM 18 MECHUAMANA- MULIATUY'
            });
var format_Km15VIA_14 = new ol.format.GeoJSON();
var features_Km15VIA_14 = format_Km15VIA_14.readFeatures(json_Km15VIA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km15VIA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km15VIA_14.addFeatures(features_Km15VIA_14);
var lyr_Km15VIA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km15VIA_14, 
                style: style_Km15VIA_14,
                popuplayertitle: 'Km 15 VIA',
                interactive: true,
                title: '<img src="styles/legend/Km15VIA_14.png" /> Km 15 VIA'
            });
var format_Km15SSValencia_15 = new ol.format.GeoJSON();
var features_Km15SSValencia_15 = format_Km15SSValencia_15.readFeatures(json_Km15SSValencia_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km15SSValencia_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km15SSValencia_15.addFeatures(features_Km15SSValencia_15);
cluster_Km15SSValencia_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Km15SSValencia_15
});
var lyr_Km15SSValencia_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Km15SSValencia_15, 
                style: style_Km15SSValencia_15,
                popuplayertitle: 'Km 15 SS Valencia',
                interactive: true,
    title: 'Km 15 SS Valencia<br />\
    <img src="styles/legend/Km15SSValencia_15_0.png" /> Km 0+000<br />\
    <img src="styles/legend/Km15SSValencia_15_1.png" /> Km 0+665<br />\
    <img src="styles/legend/Km15SSValencia_15_2.png" /> Km 0+730<br />\
    <img src="styles/legend/Km15SSValencia_15_3.png" /> Km 1+010<br />' });
var format_KM15_16 = new ol.format.GeoJSON();
var features_KM15_16 = format_KM15_16.readFeatures(json_KM15_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_KM15_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KM15_16.addFeatures(features_KM15_16);
cluster_KM15_16 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KM15_16
});
var lyr_KM15_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KM15_16, 
                style: style_KM15_16,
                popuplayertitle: 'KM 15',
                interactive: true,
                title: '<img src="styles/legend/KM15_16.png" /> KM 15'
            });
var format_VaUribiaAntigua_17 = new ol.format.GeoJSON();
var features_VaUribiaAntigua_17 = format_VaUribiaAntigua_17.readFeatures(json_VaUribiaAntigua_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_VaUribiaAntigua_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VaUribiaAntigua_17.addFeatures(features_VaUribiaAntigua_17);
var lyr_VaUribiaAntigua_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VaUribiaAntigua_17, 
                style: style_VaUribiaAntigua_17,
                popuplayertitle: 'Vía Uribia Antigua',
                interactive: true,
                title: '<img src="styles/legend/VaUribiaAntigua_17.png" /> Vía Uribia Antigua'
            });
var format_VaantiguaUribia_18 = new ol.format.GeoJSON();
var features_VaantiguaUribia_18 = format_VaantiguaUribia_18.readFeatures(json_VaantiguaUribia_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_VaantiguaUribia_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VaantiguaUribia_18.addFeatures(features_VaantiguaUribia_18);
cluster_VaantiguaUribia_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_VaantiguaUribia_18
});
var lyr_VaantiguaUribia_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_VaantiguaUribia_18, 
                style: style_VaantiguaUribia_18,
                popuplayertitle: 'Vía antigua Uribia',
                interactive: true,
    title: 'Vía antigua Uribia<br />\
    <img src="styles/legend/VaantiguaUribia_18_0.png" /> Km 0+000<br />\
    <img src="styles/legend/VaantiguaUribia_18_1.png" /> Km 0+806<br />\
    <img src="styles/legend/VaantiguaUribia_18_2.png" /> VASO COMUNICANTE 1<br />\
    <img src="styles/legend/VaantiguaUribia_18_3.png" /> VASO COMUNICANTE 2<br />' });
var format_Km10VIA_19 = new ol.format.GeoJSON();
var features_Km10VIA_19 = format_Km10VIA_19.readFeatures(json_Km10VIA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km10VIA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km10VIA_19.addFeatures(features_Km10VIA_19);
var lyr_Km10VIA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km10VIA_19, 
                style: style_Km10VIA_19,
                popuplayertitle: 'Km 10 VIA',
                interactive: true,
                title: '<img src="styles/legend/Km10VIA_19.png" /> Km 10 VIA'
            });
var format_Km10SVGonzales_20 = new ol.format.GeoJSON();
var features_Km10SVGonzales_20 = format_Km10SVGonzales_20.readFeatures(json_Km10SVGonzales_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km10SVGonzales_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km10SVGonzales_20.addFeatures(features_Km10SVGonzales_20);
cluster_Km10SVGonzales_20 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Km10SVGonzales_20
});
var lyr_Km10SVGonzales_20 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Km10SVGonzales_20, 
                style: style_Km10SVGonzales_20,
                popuplayertitle: 'Km 10 SV Gonzales',
                interactive: true,
    title: 'Km 10 SV Gonzales<br />\
    <img src="styles/legend/Km10SVGonzales_20_0.png" /> Km 0+000<br />\
    <img src="styles/legend/Km10SVGonzales_20_1.png" /> Km 0+816<br />' });
var format_VIAKANASUMANAKM10_21 = new ol.format.GeoJSON();
var features_VIAKANASUMANAKM10_21 = format_VIAKANASUMANAKM10_21.readFeatures(json_VIAKANASUMANAKM10_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_VIAKANASUMANAKM10_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIAKANASUMANAKM10_21.addFeatures(features_VIAKANASUMANAKM10_21);
cluster_VIAKANASUMANAKM10_21 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_VIAKANASUMANAKM10_21
});
var lyr_VIAKANASUMANAKM10_21 = new ol.layer.Vector({
                declutter: false,
                source:cluster_VIAKANASUMANAKM10_21, 
                style: style_VIAKANASUMANAKM10_21,
                popuplayertitle: 'VIA KANASUMANA KM 10',
                interactive: true,
                title: '<img src="styles/legend/VIAKANASUMANAKM10_21.png" /> VIA KANASUMANA KM 10'
            });
var format_Km2VIA_22 = new ol.format.GeoJSON();
var features_Km2VIA_22 = format_Km2VIA_22.readFeatures(json_Km2VIA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km2VIA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km2VIA_22.addFeatures(features_Km2VIA_22);
var lyr_Km2VIA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Km2VIA_22, 
                style: style_Km2VIA_22,
                popuplayertitle: 'Km 2 VIA',
                interactive: true,
                title: '<img src="styles/legend/Km2VIA_22.png" /> Km 2 VIA'
            });
var format_Km2_23 = new ol.format.GeoJSON();
var features_Km2_23 = format_Km2_23.readFeatures(json_Km2_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_Km2_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Km2_23.addFeatures(features_Km2_23);
cluster_Km2_23 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Km2_23
});
var lyr_Km2_23 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Km2_23, 
                style: style_Km2_23,
                popuplayertitle: 'Km 2',
                interactive: true,
    title: 'Km 2<br />\
    <img src="styles/legend/Km2_23_0.png" /> ALCANTARILLA<br />\
    <img src="styles/legend/Km2_23_1.png" /> Km 0+000<br />\
    <img src="styles/legend/Km2_23_2.png" /> Km 0+518<br />' });
var format_KM2VIAAVALLEDUPAR_24 = new ol.format.GeoJSON();
var features_KM2VIAAVALLEDUPAR_24 = format_KM2VIAAVALLEDUPAR_24.readFeatures(json_KM2VIAAVALLEDUPAR_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4686'});
var jsonSource_KM2VIAAVALLEDUPAR_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KM2VIAAVALLEDUPAR_24.addFeatures(features_KM2VIAAVALLEDUPAR_24);
cluster_KM2VIAAVALLEDUPAR_24 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_KM2VIAAVALLEDUPAR_24
});
var lyr_KM2VIAAVALLEDUPAR_24 = new ol.layer.Vector({
                declutter: false,
                source:cluster_KM2VIAAVALLEDUPAR_24, 
                style: style_KM2VIAAVALLEDUPAR_24,
                popuplayertitle: 'KM 2 VIA A VALLEDUPAR',
                interactive: true,
                title: '<img src="styles/legend/KM2VIAAVALLEDUPAR_24.png" /> KM 2 VIA A VALLEDUPAR'
            });
var group_KM2 = new ol.layer.Group({
                                layers: [lyr_Km2VIA_22,lyr_Km2_23,lyr_KM2VIAAVALLEDUPAR_24,],
                                fold: 'close',
                                title: 'KM2'});
var group_KM10 = new ol.layer.Group({
                                layers: [lyr_VaUribiaAntigua_17,lyr_VaantiguaUribia_18,lyr_Km10VIA_19,lyr_Km10SVGonzales_20,lyr_VIAKANASUMANAKM10_21,],
                                fold: 'close',
                                title: 'KM10'});
var group_KM15 = new ol.layer.Group({
                                layers: [lyr_Km15VIA_14,lyr_Km15SSValencia_15,lyr_KM15_16,],
                                fold: 'close',
                                title: 'KM15'});
var group_KM18 = new ol.layer.Group({
                                layers: [lyr_Km18VIA_11,lyr_Km18SSValencia_12,lyr_KM18MECHUAMANAMULIATUY_13,],
                                fold: 'close',
                                title: 'KM18'});
var group_KM35 = new ol.layer.Group({
                                layers: [lyr_Km35VIA_8,lyr_Km35SSCastellanos_9,lyr_SCHIMUN_10,],
                                fold: 'close',
                                title: 'KM35'});
var group_KM61 = new ol.layer.Group({
                                layers: [lyr_Km61VIA_5,lyr_Km61SSCastellanos_6,lyr_JASHIIKIRU_7,],
                                fold: 'close',
                                title: 'KM61'});
var group_GUAJIRA = new ol.layer.Group({
                                layers: [lyr_URIBIA_1,lyr_MAICAO_2,lyr_RIOACHA_3,lyr_MANAURE_4,],
                                fold: 'close',
                                title: 'GUAJIRA'});

lyr_GoogleHybrid_0.setVisible(true);lyr_URIBIA_1.setVisible(true);lyr_MAICAO_2.setVisible(true);lyr_RIOACHA_3.setVisible(true);lyr_MANAURE_4.setVisible(true);lyr_Km61VIA_5.setVisible(true);lyr_Km61SSCastellanos_6.setVisible(true);lyr_JASHIIKIRU_7.setVisible(true);lyr_Km35VIA_8.setVisible(true);lyr_Km35SSCastellanos_9.setVisible(true);lyr_SCHIMUN_10.setVisible(true);lyr_Km18VIA_11.setVisible(true);lyr_Km18SSValencia_12.setVisible(true);lyr_KM18MECHUAMANAMULIATUY_13.setVisible(true);lyr_Km15VIA_14.setVisible(true);lyr_Km15SSValencia_15.setVisible(true);lyr_KM15_16.setVisible(true);lyr_VaUribiaAntigua_17.setVisible(true);lyr_VaantiguaUribia_18.setVisible(true);lyr_Km10VIA_19.setVisible(true);lyr_Km10SVGonzales_20.setVisible(true);lyr_VIAKANASUMANAKM10_21.setVisible(true);lyr_Km2VIA_22.setVisible(true);lyr_Km2_23.setVisible(true);lyr_KM2VIAAVALLEDUPAR_24.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_GUAJIRA,group_KM61,group_KM35,group_KM18,group_KM15,group_KM10,group_KM2];
lyr_URIBIA_1.set('fieldAliases', {'MPIO_CNMBR': 'MPIO_CNMBR', });
lyr_MAICAO_2.set('fieldAliases', {'MPIO_CNMBR': 'MPIO_CNMBR', });
lyr_RIOACHA_3.set('fieldAliases', {'MPIO_CNMBR': 'MPIO_CNMBR', });
lyr_MANAURE_4.set('fieldAliases', {'MPIO_CNMBR': 'MPIO_CNMBR', });
lyr_Km61VIA_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km61SSCastellanos_6.set('fieldAliases', {'Km': 'Km', });
lyr_JASHIIKIRU_7.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km35VIA_8.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km35SSCastellanos_9.set('fieldAliases', {'Km': 'Km', });
lyr_SCHIMUN_10.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km18VIA_11.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km18SSValencia_12.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_KM18MECHUAMANAMULIATUY_13.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km15VIA_14.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km15SSValencia_15.set('fieldAliases', {'Km': 'Km', });
lyr_KM15_16.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_VaUribiaAntigua_17.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_VaantiguaUribia_18.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km10VIA_19.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km10SVGonzales_20.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_VIAKANASUMANAKM10_21.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km2VIA_22.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Km2_23.set('fieldAliases', {'Km': 'Km', });
lyr_KM2VIAAVALLEDUPAR_24.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_URIBIA_1.set('fieldImages', {'MPIO_CNMBR': 'TextEdit', });
lyr_MAICAO_2.set('fieldImages', {'MPIO_CNMBR': 'TextEdit', });
lyr_RIOACHA_3.set('fieldImages', {'MPIO_CNMBR': 'TextEdit', });
lyr_MANAURE_4.set('fieldImages', {'MPIO_CNMBR': 'TextEdit', });
lyr_Km61VIA_5.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km61SSCastellanos_6.set('fieldImages', {'Km': 'TextEdit', });
lyr_JASHIIKIRU_7.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km35VIA_8.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km35SSCastellanos_9.set('fieldImages', {'Km': 'TextEdit', });
lyr_SCHIMUN_10.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km18VIA_11.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km18SSValencia_12.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_KM18MECHUAMANAMULIATUY_13.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km15VIA_14.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km15SSValencia_15.set('fieldImages', {'Km': 'TextEdit', });
lyr_KM15_16.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_VaUribiaAntigua_17.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_VaantiguaUribia_18.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km10VIA_19.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km10SVGonzales_20.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_VIAKANASUMANAKM10_21.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km2VIA_22.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Km2_23.set('fieldImages', {'Km': 'TextEdit', });
lyr_KM2VIAAVALLEDUPAR_24.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_URIBIA_1.set('fieldLabels', {'MPIO_CNMBR': 'no label', });
lyr_MAICAO_2.set('fieldLabels', {'MPIO_CNMBR': 'no label', });
lyr_RIOACHA_3.set('fieldLabels', {'MPIO_CNMBR': 'no label', });
lyr_MANAURE_4.set('fieldLabels', {'MPIO_CNMBR': 'no label', });
lyr_Km61VIA_5.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km61SSCastellanos_6.set('fieldLabels', {'Km': 'no label', });
lyr_JASHIIKIRU_7.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km35VIA_8.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km35SSCastellanos_9.set('fieldLabels', {'Km': 'no label', });
lyr_SCHIMUN_10.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km18VIA_11.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km18SSValencia_12.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_KM18MECHUAMANAMULIATUY_13.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km15VIA_14.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km15SSValencia_15.set('fieldLabels', {'Km': 'no label', });
lyr_KM15_16.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_VaUribiaAntigua_17.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_VaantiguaUribia_18.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km10VIA_19.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km10SVGonzales_20.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_VIAKANASUMANAKM10_21.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_Km2VIA_22.set('fieldLabels', {'NOMBRE': 'hidden field', });
lyr_Km2_23.set('fieldLabels', {'Km': 'no label', });
lyr_KM2VIAAVALLEDUPAR_24.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_KM2VIAAVALLEDUPAR_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});