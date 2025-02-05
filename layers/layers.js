var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_D_PRIOKOMP_1 = new ol.format.GeoJSON();
var features_D_PRIOKOMP_1 = format_D_PRIOKOMP_1.readFeatures(json_D_PRIOKOMP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D_PRIOKOMP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D_PRIOKOMP_1.addFeatures(features_D_PRIOKOMP_1);
var lyr_D_PRIOKOMP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D_PRIOKOMP_1, 
                style: style_D_PRIOKOMP_1,
                popuplayertitle: 'D_PRIO KOMP',
                interactive: true,
    title: 'D_PRIO KOMP<br />\
    <img src="styles/legend/D_PRIOKOMP_1_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D_PRIOKOMP_1_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D_PRIOKOMP_1_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D_PRIOKOMP_1_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D_PRIOKOMP_1_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D_PRIOKOMP_1_5.png" /> Prioritas 6<br />'
        });
var format_D6PTenKes_2 = new ol.format.GeoJSON();
var features_D6PTenKes_2 = format_D6PTenKes_2.readFeatures(json_D6PTenKes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D6PTenKes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D6PTenKes_2.addFeatures(features_D6PTenKes_2);
var lyr_D6PTenKes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D6PTenKes_2, 
                style: style_D6PTenKes_2,
                popuplayertitle: 'D-6.P.TenKes',
                interactive: true,
    title: 'D-6.P.TenKes<br />\
    <img src="styles/legend/D6PTenKes_2_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D6PTenKes_2_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D6PTenKes_2_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D6PTenKes_2_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D6PTenKes_2_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D6PTenKes_2_5.png" /> Prioritas 6<br />'
        });
var format_D5PNoWater_3 = new ol.format.GeoJSON();
var features_D5PNoWater_3 = format_D5PNoWater_3.readFeatures(json_D5PNoWater_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D5PNoWater_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D5PNoWater_3.addFeatures(features_D5PNoWater_3);
var lyr_D5PNoWater_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D5PNoWater_3, 
                style: style_D5PNoWater_3,
                popuplayertitle: 'D-5.P.NoWater',
                interactive: true,
    title: 'D-5.P.NoWater<br />\
    <img src="styles/legend/D5PNoWater_3_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D5PNoWater_3_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D5PNoWater_3_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D5PNoWater_3_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D5PNoWater_3_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D5PNoWater_3_5.png" /> Prioritas 6<br />'
        });
var format_D4PJalan_4 = new ol.format.GeoJSON();
var features_D4PJalan_4 = format_D4PJalan_4.readFeatures(json_D4PJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D4PJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D4PJalan_4.addFeatures(features_D4PJalan_4);
var lyr_D4PJalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D4PJalan_4, 
                style: style_D4PJalan_4,
                popuplayertitle: 'D-4.P.Jalan',
                interactive: true,
    title: 'D-4.P.Jalan<br />\
    <img src="styles/legend/D4PJalan_4_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D4PJalan_4_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D4PJalan_4_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D4PJalan_4_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D4PJalan_4_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D4PJalan_4_5.png" /> Prioritas 6<br />'
        });
var format_D3PTdkSejah_5 = new ol.format.GeoJSON();
var features_D3PTdkSejah_5 = format_D3PTdkSejah_5.readFeatures(json_D3PTdkSejah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D3PTdkSejah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D3PTdkSejah_5.addFeatures(features_D3PTdkSejah_5);
var lyr_D3PTdkSejah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D3PTdkSejah_5, 
                style: style_D3PTdkSejah_5,
                popuplayertitle: 'D-3.P.Tdk Sejah',
                interactive: true,
    title: 'D-3.P.Tdk Sejah<br />\
    <img src="styles/legend/D3PTdkSejah_5_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D3PTdkSejah_5_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D3PTdkSejah_5_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D3PTdkSejah_5_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D3PTdkSejah_5_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D3PTdkSejah_5_5.png" /> Prioritas 6<br />'
        });
var format_D2PSarana_6 = new ol.format.GeoJSON();
var features_D2PSarana_6 = format_D2PSarana_6.readFeatures(json_D2PSarana_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_D2PSarana_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_D2PSarana_6.addFeatures(features_D2PSarana_6);
var lyr_D2PSarana_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_D2PSarana_6, 
                style: style_D2PSarana_6,
                popuplayertitle: 'D-2.P.Sarana',
                interactive: true,
    title: 'D-2.P.Sarana<br />\
    <img src="styles/legend/D2PSarana_6_0.png" /> Prioritas 1<br />\
    <img src="styles/legend/D2PSarana_6_1.png" /> Prioritas 2<br />\
    <img src="styles/legend/D2PSarana_6_2.png" /> Prioritas 3<br />\
    <img src="styles/legend/D2PSarana_6_3.png" /> Prioritas 4<br />\
    <img src="styles/legend/D2PSarana_6_4.png" /> Prioritas 5<br />\
    <img src="styles/legend/D2PSarana_6_5.png" /> Prioritas 6<br />'
        });
var format_KELURAHAN_7 = new ol.format.GeoJSON();
var features_KELURAHAN_7 = format_KELURAHAN_7.readFeatures(json_KELURAHAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELURAHAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHAN_7.addFeatures(features_KELURAHAN_7);
var lyr_KELURAHAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHAN_7, 
                style: style_KELURAHAN_7,
                popuplayertitle: 'KELURAHAN',
                interactive: true,
                title: '<img src="styles/legend/KELURAHAN_7.png" /> KELURAHAN'
            });
var format_KECAMATAN_8 = new ol.format.GeoJSON();
var features_KECAMATAN_8 = format_KECAMATAN_8.readFeatures(json_KECAMATAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_8.addFeatures(features_KECAMATAN_8);
var lyr_KECAMATAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATAN_8, 
                style: style_KECAMATAN_8,
                popuplayertitle: 'KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_8.png" /> KECAMATAN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_D_PRIOKOMP_1.setVisible(true);lyr_D6PTenKes_2.setVisible(true);lyr_D5PNoWater_3.setVisible(true);lyr_D4PJalan_4.setVisible(true);lyr_D3PTdkSejah_5.setVisible(true);lyr_D2PSarana_6.setVisible(true);lyr_KELURAHAN_7.setVisible(true);lyr_KECAMATAN_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_D_PRIOKOMP_1,lyr_D6PTenKes_2,lyr_D5PNoWater_3,lyr_D4PJalan_4,lyr_D3PTdkSejah_5,lyr_D2PSarana_6,lyr_KELURAHAN_7,lyr_KECAMATAN_8];
lyr_D_PRIOKOMP_1.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_D6PTenKes_2.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_D5PNoWater_3.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_D4PJalan_4.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_D3PTdkSejah_5.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_D2PSarana_6.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kelurahan': 'D_Nama Kelurahan', 'D_2. P.Sarana': 'D_2. P.Sarana', 'D_3. P.Tdk Sejah': 'D_3. P.Tdk Sejah', 'D_4. P.Jalan': 'D_4. P.Jalan', 'D_5. P.NoWater': 'D_5. P.NoWater', 'D_6. P.Tenkes': 'D_6. P.Tenkes', 'D_INDEKS KOM': 'D_INDEKS KOM', 'D_PERINGKAT': 'D_PERINGKAT', 'D_PRIO KOMP': 'D_PRIO KOMP', });
lyr_KELURAHAN_7.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', });
lyr_KECAMATAN_8.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'kec': 'kec', 'ID_Kec': 'ID_Kec', 'Kode_Kec': 'Kode_Kec', });
lyr_D_PRIOKOMP_1.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_D6PTenKes_2.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_D5PNoWater_3.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_D4PJalan_4.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_D3PTdkSejah_5.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_D2PSarana_6.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kelurahan': 'TextEdit', 'D_2. P.Sarana': 'Range', 'D_3. P.Tdk Sejah': 'Range', 'D_4. P.Jalan': 'Range', 'D_5. P.NoWater': 'Range', 'D_6. P.Tenkes': 'Range', 'D_INDEKS KOM': 'TextEdit', 'D_PERINGKAT': 'Range', 'D_PRIO KOMP': 'Range', });
lyr_KELURAHAN_7.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'Range', 'ID_Kec': 'Range', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', });
lyr_KECAMATAN_8.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'kec': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kode_Kec': 'TextEdit', });
lyr_D_PRIOKOMP_1.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'inline label - visible with data', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'inline label - visible with data', 'D_2. P.Sarana': 'hidden field', 'D_3. P.Tdk Sejah': 'hidden field', 'D_4. P.Jalan': 'hidden field', 'D_5. P.NoWater': 'hidden field', 'D_6. P.Tenkes': 'hidden field', 'D_INDEKS KOM': 'inline label - visible with data', 'D_PERINGKAT': 'inline label - visible with data', 'D_PRIO KOMP': 'inline label - visible with data', });
lyr_D6PTenKes_2.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'inline label - visible with data', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'inline label - visible with data', 'D_2. P.Sarana': 'hidden field', 'D_3. P.Tdk Sejah': 'hidden field', 'D_4. P.Jalan': 'hidden field', 'D_5. P.NoWater': 'hidden field', 'D_6. P.Tenkes': 'inline label - visible with data', 'D_INDEKS KOM': 'hidden field', 'D_PERINGKAT': 'hidden field', 'D_PRIO KOMP': 'hidden field', });
lyr_D5PNoWater_3.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'inline label - visible with data', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'inline label - visible with data', 'D_2. P.Sarana': 'hidden field', 'D_3. P.Tdk Sejah': 'hidden field', 'D_4. P.Jalan': 'hidden field', 'D_5. P.NoWater': 'inline label - visible with data', 'D_6. P.Tenkes': 'hidden field', 'D_INDEKS KOM': 'hidden field', 'D_PERINGKAT': 'hidden field', 'D_PRIO KOMP': 'hidden field', });
lyr_D4PJalan_4.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'inline label - visible with data', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'inline label - visible with data', 'D_2. P.Sarana': 'hidden field', 'D_3. P.Tdk Sejah': 'hidden field', 'D_4. P.Jalan': 'inline label - visible with data', 'D_5. P.NoWater': 'hidden field', 'D_6. P.Tenkes': 'hidden field', 'D_INDEKS KOM': 'hidden field', 'D_PERINGKAT': 'hidden field', 'D_PRIO KOMP': 'hidden field', });
lyr_D3PTdkSejah_5.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'no label', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'no label', 'D_2. P.Sarana': 'hidden field', 'D_3. P.Tdk Sejah': 'no label', 'D_4. P.Jalan': 'hidden field', 'D_5. P.NoWater': 'hidden field', 'D_6. P.Tenkes': 'hidden field', 'D_INDEKS KOM': 'hidden field', 'D_PERINGKAT': 'hidden field', 'D_PRIO KOMP': 'hidden field', });
lyr_D2PSarana_6.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'hidden field', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'inline label - visible with data', 'D_Kode Kec': 'hidden field', 'D_Nama Kelurahan': 'inline label - visible with data', 'D_2. P.Sarana': 'inline label - visible with data', 'D_3. P.Tdk Sejah': 'hidden field', 'D_4. P.Jalan': 'hidden field', 'D_5. P.NoWater': 'hidden field', 'D_6. P.Tenkes': 'hidden field', 'D_INDEKS KOM': 'hidden field', 'D_PERINGKAT': 'hidden field', 'D_PRIO KOMP': 'hidden field', });
lyr_KELURAHAN_7.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'inline label - visible with data', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', });
lyr_KECAMATAN_8.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'kec': 'hidden field', 'ID_Kec': 'hidden field', 'Kode_Kec': 'hidden field', });
lyr_KECAMATAN_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});