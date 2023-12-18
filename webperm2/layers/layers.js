var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_CompartimentaoGeotectonica_2 = new ol.format.GeoJSON();
var features_CompartimentaoGeotectonica_2 = format_CompartimentaoGeotectonica_2.readFeatures(json_CompartimentaoGeotectonica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CompartimentaoGeotectonica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CompartimentaoGeotectonica_2.addFeatures(features_CompartimentaoGeotectonica_2);
var lyr_CompartimentaoGeotectonica_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CompartimentaoGeotectonica_2, 
                style: style_CompartimentaoGeotectonica_2,
                interactive: true,
    title: 'Compartimentação Geotectonica<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_0.png" /> Arco Magmático de Goiás - Granitóides<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_1.png" /> Arco Magmático de Goiás-Complexo Granulítico<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_2.png" /> Arco Magmático de Goiás-Intrusivas Máfica-ultramáficas<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_3.png" /> Arco Magmático de Goiás-Sequências Metavulcanossedimentares<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_4.png" /> Bacia Cenozóica-Bacia do Bananal<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_5.png" /> Bacia de Antepaís<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_6.png" /> Bacia do Paraná<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_7.png" /> Bacia Intracontinental - Sequência Pós-Rift<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_8.png" /> Bacia Intracontinental - Sequência Rift<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_9.png" /> Bacia Oceânica Mesoproterozóica<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_10.png" /> Bacia Sanfranciscana<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_11.png" /> Cinturões Paleoproterozóicos-Sequências Metassedimentares<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_12.png" /> Cinturões Paleoproterozóicos-Sequências Metavulcanossedimentares<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_13.png" /> Cinturões Paleoproterozóicos-Terrenos Granito-gnáissicos<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_14.png" /> Emb.BSB - Fx. BSB - TGG - Complexos Granito-Gnáissico<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_15.png" /> Emb.BSB - Fx. BSB - TGG - Greenstone Belt<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_16.png" /> Emb.BSB - Fx. BSB - TGG - Intrusivas Máfica-ultramáficas<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_17.png" /> Emb.BSB - Fx. BSB - TGG - Sequências metassedimentares arqueanas/paleoproterozóicas<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_18.png" /> Faixa Araguaia-Zona Interna<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_19.png" /> Faixa Brasília-Zona Externa-Bacia de Margem Passiva<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_20.png" /> Faixa Brasília-Zona Interna-Bacia Marginal de Arco<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_21.png" /> Faixa Brasília-Zona Interna-Intrusões Máfico-ultramáficas Acamadadas<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_22.png" /> Faixa Brasília-Zona Interna-Raiz de Arco Magmático<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_23.png" /> Faixa Paraguai-Zona Interna<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_24.png" /> Graben Água Bonita<br />\
    <img src="styles/legend/CompartimentaoGeotectonica_2_25.png" /> Massa de agua<br />'
        });
var format_PotencialMineral_3 = new ol.format.GeoJSON();
var features_PotencialMineral_3 = format_PotencialMineral_3.readFeatures(json_PotencialMineral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotencialMineral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotencialMineral_3.addFeatures(features_PotencialMineral_3);
var lyr_PotencialMineral_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotencialMineral_3, 
                style: style_PotencialMineral_3,
                interactive: true,
    title: 'Potencial Mineral<br />\
    <img src="styles/legend/PotencialMineral_3_0.png" /> Moderado a Alto<br />\
    <img src="styles/legend/PotencialMineral_3_1.png" /> Moderado a Baixo<br />'
        });
var format_Municipal_4 = new ol.format.GeoJSON();
var features_Municipal_4 = format_Municipal_4.readFeatures(json_Municipal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_4.addFeatures(features_Municipal_4);
var lyr_Municipal_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipal_4, 
                style: style_Municipal_4,
                interactive: true,
                title: '<img src="styles/legend/Municipal_4.png" /> Municipal'
            });
var format_Estadual_5 = new ol.format.GeoJSON();
var features_Estadual_5 = format_Estadual_5.readFeatures(json_Estadual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estadual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estadual_5.addFeatures(features_Estadual_5);
var lyr_Estadual_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estadual_5, 
                style: style_Estadual_5,
                interactive: true,
                title: '<img src="styles/legend/Estadual_5.png" /> Estadual'
            });
var format_Federal_6 = new ol.format.GeoJSON();
var features_Federal_6 = format_Federal_6.readFeatures(json_Federal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Federal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Federal_6.addFeatures(features_Federal_6);
var lyr_Federal_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Federal_6, 
                style: style_Federal_6,
                interactive: true,
                title: '<img src="styles/legend/Federal_6.png" /> Federal'
            });
var format_BaciadeCaptaodegua_7 = new ol.format.GeoJSON();
var features_BaciadeCaptaodegua_7 = format_BaciadeCaptaodegua_7.readFeatures(json_BaciadeCaptaodegua_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciadeCaptaodegua_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeCaptaodegua_7.addFeatures(features_BaciadeCaptaodegua_7);
var lyr_BaciadeCaptaodegua_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BaciadeCaptaodegua_7, 
                style: style_BaciadeCaptaodegua_7,
                interactive: true,
                title: '<img src="styles/legend/BaciadeCaptaodegua_7.png" /> Bacia de Captação de Água'
            });
var format_PontodeCaptaodegua_8 = new ol.format.GeoJSON();
var features_PontodeCaptaodegua_8 = format_PontodeCaptaodegua_8.readFeatures(json_PontodeCaptaodegua_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontodeCaptaodegua_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontodeCaptaodegua_8.addFeatures(features_PontodeCaptaodegua_8);
var lyr_PontodeCaptaodegua_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PontodeCaptaodegua_8, 
                style: style_PontodeCaptaodegua_8,
                interactive: true,
                title: '<img src="styles/legend/PontodeCaptaodegua_8.png" /> Ponto de Captação de Água'
            });
var format_LinhadeTransmisso_9 = new ol.format.GeoJSON();
var features_LinhadeTransmisso_9 = format_LinhadeTransmisso_9.readFeatures(json_LinhadeTransmisso_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinhadeTransmisso_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinhadeTransmisso_9.addFeatures(features_LinhadeTransmisso_9);
var lyr_LinhadeTransmisso_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LinhadeTransmisso_9, 
                style: style_LinhadeTransmisso_9,
                interactive: true,
    title: 'Linha de Transmissão<br />\
    <img src="styles/legend/LinhadeTransmisso_9_0.png" /> 14 - 35 kV<br />\
    <img src="styles/legend/LinhadeTransmisso_9_1.png" /> 35 - 69 kV<br />\
    <img src="styles/legend/LinhadeTransmisso_9_2.png" /> 69 - 138 kV<br />\
    <img src="styles/legend/LinhadeTransmisso_9_3.png" /> 138 - 230 kV<br />'
        });
var format_Aeroporto_10 = new ol.format.GeoJSON();
var features_Aeroporto_10 = format_Aeroporto_10.readFeatures(json_Aeroporto_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeroporto_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeroporto_10.addFeatures(features_Aeroporto_10);
var lyr_Aeroporto_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aeroporto_10, 
                style: style_Aeroporto_10,
                interactive: true,
                title: '<img src="styles/legend/Aeroporto_10.png" /> Aeroporto'
            });
var format_Localidade_11 = new ol.format.GeoJSON();
var features_Localidade_11 = format_Localidade_11.readFeatures(json_Localidade_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidade_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidade_11.addFeatures(features_Localidade_11);
var lyr_Localidade_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidade_11, 
                style: style_Localidade_11,
                interactive: true,
                title: '<img src="styles/legend/Localidade_11.png" /> Localidade'
            });
var format_LimiteMunicipal_12 = new ol.format.GeoJSON();
var features_LimiteMunicipal_12 = format_LimiteMunicipal_12.readFeatures(json_LimiteMunicipal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_12.addFeatures(features_LimiteMunicipal_12);
var lyr_LimiteMunicipal_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteMunicipal_12, 
                style: style_LimiteMunicipal_12,
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipal_12.png" /> Limite Municipal'
            });
var format_MaioresProdutoresTtulos_13 = new ol.format.GeoJSON();
var features_MaioresProdutoresTtulos_13 = format_MaioresProdutoresTtulos_13.readFeatures(json_MaioresProdutoresTtulos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaioresProdutoresTtulos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaioresProdutoresTtulos_13.addFeatures(features_MaioresProdutoresTtulos_13);
var lyr_MaioresProdutoresTtulos_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaioresProdutoresTtulos_13, 
                style: style_MaioresProdutoresTtulos_13,
                interactive: true,
    title: 'Maiores Produtores (Títulos)<br />\
    <img src="styles/legend/MaioresProdutoresTtulos_13_0.png" /> 1 - 2<br />\
    <img src="styles/legend/MaioresProdutoresTtulos_13_1.png" /> 2 - 6<br />\
    <img src="styles/legend/MaioresProdutoresTtulos_13_2.png" /> 6 - 11<br />'
        });
var group_UnidadedeConservao = new ol.layer.Group({
                                layers: [lyr_Municipal_4,lyr_Estadual_5,lyr_Federal_6,],
                                title: "Unidade de Conservação"});
var group_Geologia = new ol.layer.Group({
                                layers: [lyr_CompartimentaoGeotectonica_2,lyr_PotencialMineral_3,],
                                title: "Geologia"});
var group_Bases = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_GoogleHybrid_1,],
                                title: "Bases"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_CompartimentaoGeotectonica_2.setVisible(false);lyr_PotencialMineral_3.setVisible(false);lyr_Municipal_4.setVisible(false);lyr_Estadual_5.setVisible(false);lyr_Federal_6.setVisible(false);lyr_BaciadeCaptaodegua_7.setVisible(false);lyr_PontodeCaptaodegua_8.setVisible(false);lyr_LinhadeTransmisso_9.setVisible(false);lyr_Aeroporto_10.setVisible(false);lyr_Localidade_11.setVisible(false);lyr_LimiteMunicipal_12.setVisible(true);lyr_MaioresProdutoresTtulos_13.setVisible(true);
var layersList = [group_Bases,group_Geologia,group_UnidadedeConservao,lyr_BaciadeCaptaodegua_7,lyr_PontodeCaptaodegua_8,lyr_LinhadeTransmisso_9,lyr_Aeroporto_10,lyr_Localidade_11,lyr_LimiteMunicipal_12,lyr_MaioresProdutoresTtulos_13];
lyr_CompartimentaoGeotectonica_2.set('fieldAliases', {'LEGENDA': 'Legenda', 'SIGLA_UNID': 'Sigla', 'NOME_UNIDA': 'Nome', 'HIERARQUIA': 'HIERARQUIA', 'HIERAR_SUP': 'HIERAR_SUP', 'IDADE_MAX': 'IDADE_MAX', 'ERRO_MAX': 'ERRO_MAX', 'EON_ID_MAX': 'EON_ID_MAX', 'ERA_MAXIMA': 'Era', 'PERIOD_MAX': 'Período', 'EPOCA_MAX': 'EPOCA_MAX', 'SIS_ID_MAX': 'SIS_ID_MAX', 'MET_ID_MAX': 'MET_ID_MAX', 'QDL_ID_MAX': 'QDL_ID_MAX', 'IDADE_MIN': 'IDADE_MIN', 'ERRRO_MIN': 'ERRRO_MIN', 'EON_ID_MIN': 'EON_ID_MIN', 'ERA_MINIMA': 'ERA_MINIMA', 'PERIOD_MIN': 'PERIOD_MIN', 'EPOCA_MIN': 'EPOCA_MIN', 'SIS_ID_MIN': 'SIS_ID_MIN', 'MET_ID_MIN': 'MET_ID_MIN', 'QDL_ID_MIN': 'QDL_ID_MIN', 'MORFOLOGIA': 'Morfologia', 'AMB_SED': 'AMB_SED', 'SIST_SED': 'SIST_SED', 'TIPO_DEPOS': 'TIPO_DEPOS', 'ASSOC_MAGM': 'ASSOC_MAGM', 'NIVEL_CRUS': 'NIVEL_CRUS', 'TEXTURA_IG': 'TEXTURA_IG', 'FONTE_MAGM': 'FONTE_MAGM', 'AMB_TECT': 'AMB_TECT', 'METAMORFIS': 'METAMORFIS', 'METODO_GEO': 'METODO_GEO', 'TEMP_PICO': 'TEMP_PICO', 'PRESSAO_PI': 'PRESSAO_PI', 'TIPO_BARIC': 'TIPO_BARIC', 'TRAJETORIA': 'TRAJETORIA', 'LITOTIPO1': 'LITOTIPO1', 'LITOTIPO2': 'LITOTIPO2', 'CLAS_ROC1': 'CLAS_ROC1', 'CLAS_ROC2': 'CLAS_ROC2', 'SUBCLAS1': 'SUBCLAS1', 'SUBCLAS2': 'SUBCLAS2', 'ROTULO': 'ROTULO', 'GEOTEC': 'Geotectonica', 'GEOTEC_1': 'GEOTEC_1', 'GEOTEC_2': 'GEOTEC_2', 'GEOTEC_3': 'GEOTEC_3', 'GEOTEC_4': 'GEOTEC_4', 'GEOTEC_5': 'GEOTEC_5', 'GEOTEC_6': 'GEOTEC_6', 'GEOTEC_7': 'GEOTEC_7', 'GEOTEC_8': 'GEOTEC_8', 'LEGENDA_2': 'LEGENDA_2', 'SIGLA_HIST': 'SIGLA_HIST', });
lyr_PotencialMineral_3.set('fieldAliases', {'RECURSO': 'Recurso', 'POTENCIAL': 'Potencial', 'SUBSTANCIA': 'Substancia', 'CONTROLE': 'Controle', 'ID_AREA': 'ID Área', 'UN_GEOTEC': 'Unidade Geotécnica', 'LEG': 'LEG', 'LEG1': 'LEG1', });
lyr_Municipal_4.set('fieldAliases', {'codigosoli': 'codigosoli', 'esferaadmi': 'esferaadmi', 'confirmado': 'confirmado', 'municipioi': 'Município', 'nomeunidad': 'Nome', 'aprovado': 'aprovado', 'grupo': 'grupo', 'categoria': 'Categoria', 'area_ha': 'Área (ha)', });
lyr_Estadual_5.set('fieldAliases', {'codigosoli': 'codigosoli', 'esferaadmi': 'Jurisdição', 'confirmado': 'confirmado', 'municipioi': 'municipioi', 'nomeunidad': 'Nome', 'aprovado': 'aprovado', 'grupo': 'Grupo', 'categoria': 'Categoria', 'area_ha': 'Área (ha)', });
lyr_Federal_6.set('fieldAliases', {'fid': 'fid', 'codigoCnuc': 'codigoCnuc', 'nome': 'Nome', 'geometriaA': 'geometriaA', 'anoCriacao': 'Ano de Criação', 'sigla': 'Sigla', 'areaHa': 'Área (ha)', 'perimetroM': 'Perímetro (m)', 'atoLegal': 'Ato Legal', 'administra': 'Administração', 'SiglaGrupo': 'Sigla (grupo)', 'UF': 'UF', 'municipios': 'municipios', 'biomaIBGE': 'biomaIBGE', 'biomaCRL': 'biomaCRL', 'CoordRegio': 'CoordRegio', 'fusoAbrang': 'fusoAbrang', 'UORG': 'UORG', });
lyr_BaciadeCaptaodegua_7.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área', });
lyr_PontodeCaptaodegua_8.set('fieldAliases', {'N': 'N', 'CIDADE': 'Município', 'MANANCIA': 'Manancial', 'UTM_E': 'UTM_E', 'UTM_N': 'UTM_N', 'RIO_DSG': 'Rio', });
lyr_LinhadeTransmisso_9.set('fieldAliases', {'LINHAS': 'Linha', 'TENSAO_KV': 'Tensão (kV)', 'TIPO': 'Tipo', 'LEGENDA': 'LEGENDA', 'DIST_KM': 'DIST_KM', });
lyr_Aeroporto_10.set('fieldAliases', {'MUNICIPIO': 'Município', 'AEROPORTO': 'Aeroporto', 'DESIGNACAO': 'DESIGNACAO', 'SUPERF': 'SUPERF', 'HOM': 'HOM', 'ELEV_PES': 'ELEV_PES', 'LAT': 'LAT', 'LONG': 'LONG', 'COMPXLARG': 'COMPXLARG', 'RDL_GRAU': 'RDL_GRAU', 'DIST': 'DIST', 'LONG_DEC': 'LONG_DEC', 'LAT_DEC': 'LAT_DEC', 'TERM_PASS': 'TERM_PASS', 'LEG': 'LEG', 'HOMOLOG': 'HOMOLOG', 'BALIZ_NOT': 'BALIZ_NOT', });
lyr_Localidade_11.set('fieldAliases', {'NOME': 'NOME', 'NOME_ACEN': 'Nome', 'MUNICIPIO': 'Município', 'COD_MUN': 'COD_MUN', 'NOMEMICRO': 'NOMEMICRO', 'NOMEMESO': 'NOMEMESO', 'REG_PLANEJ': 'Região de Planejamento', 'ESTADO': 'ESTADO', 'REGIAO': 'REGIAO', 'GRUPO': 'Grupo', 'SRTM_M': 'Altitude', 'POPULACAO': 'População', 'LEGENDA': 'Legenda', 'OBS': 'OBS', 'SETOR_CENS': 'SETOR_CENS', 'SITUACAO': 'SITUACAO', });
lyr_LimiteMunicipal_12.set('fieldAliases', {'fid_1': 'fid_1', 'CD_GEOCODI': 'CD_GEOCODI', 'NM_MUNICIP': 'Município', 'cd_Mun': 'cd_Mun', 'Nome_Ac': 'Município', 'RegPlan': 'Região de Planejamento', 'Pop_2022': 'População 2022', });
lyr_MaioresProdutoresTtulos_13.set('fieldAliases', {'class': 'Classe', 'Arrecadado': 'Arrecadado', 'titulos': 'Títulos', 'Operação': 'Operação', 'Arrecadaçã': 'Arrecadação (R$)', 'x': 'x', 'y': 'y', 'legenda': 'Legenda', 'FID_1': 'FID_1', 'PROCESSO': 'Processo', 'NUMERO': 'Número', 'ANO': 'Ano', 'AREA_HA': 'Área (ha)', 'ID': 'ID', 'FASE': 'Fase', 'ULT_EVENTO': 'Ult. Evento', 'NOME': 'Nome', 'SUBS': 'Substância', 'USO': 'Uso', 'UF': 'UF', 'DSProcesso': 'D.S. Processo', 'FID_12': 'FID_12', 'PROCESSO_1': 'PROCESSO_1', 'NUMERO_1': 'NUMERO_1', 'ANO_1': 'ANO_1', 'AREA_HA_1': 'AREA_HA_1', 'ID_1': 'ID_1', 'FASE_1': 'FASE_1', 'ULT_EVEN_1': 'ULT_EVEN_1', 'NOME_1': 'NOME_1', 'SUBS_1': 'SUBS_1', 'USO_1': 'USO_1', 'UF_1': 'UF_1', 'DSProces_1': 'DSProces_1', 'MUNICIPIO': 'Município', 'NOME_ACEN': 'Município', 'REG_PLANEJ': 'Região de Planejamento', });
lyr_CompartimentaoGeotectonica_2.set('fieldImages', {'LEGENDA': 'TextEdit', 'SIGLA_UNID': 'TextEdit', 'NOME_UNIDA': 'TextEdit', 'HIERARQUIA': 'Hidden', 'HIERAR_SUP': 'Hidden', 'IDADE_MAX': 'Hidden', 'ERRO_MAX': 'Hidden', 'EON_ID_MAX': 'Hidden', 'ERA_MAXIMA': 'Hidden', 'PERIOD_MAX': 'Hidden', 'EPOCA_MAX': 'Hidden', 'SIS_ID_MAX': 'Hidden', 'MET_ID_MAX': 'Hidden', 'QDL_ID_MAX': 'Hidden', 'IDADE_MIN': 'Hidden', 'ERRRO_MIN': 'Hidden', 'EON_ID_MIN': 'Hidden', 'ERA_MINIMA': 'Hidden', 'PERIOD_MIN': 'Hidden', 'EPOCA_MIN': 'Hidden', 'SIS_ID_MIN': 'Hidden', 'MET_ID_MIN': 'Hidden', 'QDL_ID_MIN': 'Hidden', 'MORFOLOGIA': 'TextEdit', 'AMB_SED': 'Hidden', 'SIST_SED': 'Hidden', 'TIPO_DEPOS': 'Hidden', 'ASSOC_MAGM': 'Hidden', 'NIVEL_CRUS': 'Hidden', 'TEXTURA_IG': 'Hidden', 'FONTE_MAGM': 'Hidden', 'AMB_TECT': 'Hidden', 'METAMORFIS': 'Hidden', 'METODO_GEO': 'Hidden', 'TEMP_PICO': 'Hidden', 'PRESSAO_PI': 'Hidden', 'TIPO_BARIC': 'Hidden', 'TRAJETORIA': 'Hidden', 'LITOTIPO1': 'Hidden', 'LITOTIPO2': 'Hidden', 'CLAS_ROC1': 'Hidden', 'CLAS_ROC2': 'Hidden', 'SUBCLAS1': 'Hidden', 'SUBCLAS2': 'Hidden', 'ROTULO': 'Hidden', 'GEOTEC': 'TextEdit', 'GEOTEC_1': 'Hidden', 'GEOTEC_2': 'Hidden', 'GEOTEC_3': 'Hidden', 'GEOTEC_4': 'Hidden', 'GEOTEC_5': 'Hidden', 'GEOTEC_6': 'Hidden', 'GEOTEC_7': 'Hidden', 'GEOTEC_8': 'Hidden', 'LEGENDA_2': 'Hidden', 'SIGLA_HIST': 'Hidden', });
lyr_PotencialMineral_3.set('fieldImages', {'RECURSO': 'TextEdit', 'POTENCIAL': 'TextEdit', 'SUBSTANCIA': 'TextEdit', 'CONTROLE': 'TextEdit', 'ID_AREA': 'TextEdit', 'UN_GEOTEC': 'TextEdit', 'LEG': 'Hidden', 'LEG1': 'Hidden', });
lyr_Municipal_4.set('fieldImages', {'codigosoli': 'Hidden', 'esferaadmi': 'Hidden', 'confirmado': 'Hidden', 'municipioi': 'TextEdit', 'nomeunidad': 'TextEdit', 'aprovado': 'Hidden', 'grupo': 'Hidden', 'categoria': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Estadual_5.set('fieldImages', {'codigosoli': 'Hidden', 'esferaadmi': 'TextEdit', 'confirmado': 'Hidden', 'municipioi': 'Hidden', 'nomeunidad': 'TextEdit', 'aprovado': 'Hidden', 'grupo': 'TextEdit', 'categoria': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Federal_6.set('fieldImages', {'fid': 'Hidden', 'codigoCnuc': 'Hidden', 'nome': 'TextEdit', 'geometriaA': 'Hidden', 'anoCriacao': 'Range', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'perimetroM': 'TextEdit', 'atoLegal': 'TextEdit', 'administra': 'TextEdit', 'SiglaGrupo': 'TextEdit', 'UF': 'Hidden', 'municipios': 'Hidden', 'biomaIBGE': 'Hidden', 'biomaCRL': 'Hidden', 'CoordRegio': 'Hidden', 'fusoAbrang': 'Hidden', 'UORG': 'Hidden', });
lyr_BaciadeCaptaodegua_7.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', });
lyr_PontodeCaptaodegua_8.set('fieldImages', {'N': 'Hidden', 'CIDADE': 'TextEdit', 'MANANCIA': 'TextEdit', 'UTM_E': 'Hidden', 'UTM_N': 'Hidden', 'RIO_DSG': 'Hidden', });
lyr_LinhadeTransmisso_9.set('fieldImages', {'LINHAS': 'TextEdit', 'TENSAO_KV': 'TextEdit', 'TIPO': 'TextEdit', 'LEGENDA': 'Hidden', 'DIST_KM': 'Hidden', });
lyr_Aeroporto_10.set('fieldImages', {'MUNICIPIO': 'TextEdit', 'AEROPORTO': 'TextEdit', 'DESIGNACAO': 'Hidden', 'SUPERF': 'Hidden', 'HOM': 'Hidden', 'ELEV_PES': 'Hidden', 'LAT': 'Hidden', 'LONG': 'Hidden', 'COMPXLARG': 'Hidden', 'RDL_GRAU': 'Hidden', 'DIST': 'Hidden', 'LONG_DEC': 'Hidden', 'LAT_DEC': 'Hidden', 'TERM_PASS': 'Hidden', 'LEG': 'Hidden', 'HOMOLOG': 'Hidden', 'BALIZ_NOT': 'Hidden', });
lyr_Localidade_11.set('fieldImages', {'NOME': 'Hidden', 'NOME_ACEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COD_MUN': 'Hidden', 'NOMEMICRO': 'Hidden', 'NOMEMESO': 'Hidden', 'REG_PLANEJ': 'TextEdit', 'ESTADO': 'Hidden', 'REGIAO': 'Hidden', 'GRUPO': 'TextEdit', 'SRTM_M': 'Range', 'POPULACAO': 'TextEdit', 'LEGENDA': 'TextEdit', 'OBS': 'Hidden', 'SETOR_CENS': 'Hidden', 'SITUACAO': 'Hidden', });
lyr_LimiteMunicipal_12.set('fieldImages', {'fid_1': 'Hidden', 'CD_GEOCODI': 'Hidden', 'NM_MUNICIP': 'Hidden', 'cd_Mun': 'Hidden', 'Nome_Ac': 'TextEdit', 'RegPlan': 'TextEdit', 'Pop_2022': 'TextEdit', });
lyr_MaioresProdutoresTtulos_13.set('fieldImages', {'class': 'TextEdit', 'Arrecadado': 'TextEdit', 'titulos': 'TextEdit', 'Operação': 'TextEdit', 'Arrecadaçã': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'legenda': 'TextEdit', 'FID_1': 'Hidden', 'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'Hidden', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'Hidden', 'DSProcesso': 'TextEdit', 'FID_12': 'Hidden', 'PROCESSO_1': 'Hidden', 'NUMERO_1': 'Hidden', 'ANO_1': 'Hidden', 'AREA_HA_1': 'Hidden', 'ID_1': 'Hidden', 'FASE_1': 'Hidden', 'ULT_EVEN_1': 'Hidden', 'NOME_1': 'Hidden', 'SUBS_1': 'Hidden', 'USO_1': 'Hidden', 'UF_1': 'Hidden', 'DSProces_1': 'Hidden', 'MUNICIPIO': 'Hidden', 'NOME_ACEN': 'TextEdit', 'REG_PLANEJ': 'TextEdit', });
lyr_CompartimentaoGeotectonica_2.set('fieldLabels', {});
lyr_PotencialMineral_3.set('fieldLabels', {});
lyr_Municipal_4.set('fieldLabels', {});
lyr_Estadual_5.set('fieldLabels', {});
lyr_Federal_6.set('fieldLabels', {});
lyr_BaciadeCaptaodegua_7.set('fieldLabels', {'Nome': 'inline label', 'Area': 'inline label', });
lyr_PontodeCaptaodegua_8.set('fieldLabels', {'CIDADE': 'inline label', 'MANANCIA': 'inline label', });
lyr_LinhadeTransmisso_9.set('fieldLabels', {'LINHAS': 'inline label', 'TENSAO_KV': 'inline label', 'TIPO': 'inline label', });
lyr_Aeroporto_10.set('fieldLabels', {'MUNICIPIO': 'inline label', 'AEROPORTO': 'inline label', });
lyr_Localidade_11.set('fieldLabels', {'NOME_ACEN': 'inline label', 'MUNICIPIO': 'inline label', 'REG_PLANEJ': 'inline label', 'GRUPO': 'inline label', 'SRTM_M': 'inline label', 'POPULACAO': 'inline label', 'LEGENDA': 'inline label', });
lyr_LimiteMunicipal_12.set('fieldLabels', {'Nome_Ac': 'inline label', 'RegPlan': 'inline label', 'Pop_2022': 'inline label', });
lyr_MaioresProdutoresTtulos_13.set('fieldLabels', {'class': 'inline label', 'Arrecadado': 'inline label', 'titulos': 'inline label', 'Operação': 'inline label', 'Arrecadaçã': 'inline label', 'legenda': 'inline label', 'PROCESSO': 'inline label', 'NUMERO': 'inline label', 'ANO': 'inline label', 'AREA_HA': 'inline label', 'FASE': 'inline label', 'ULT_EVENTO': 'inline label', 'NOME': 'inline label', 'SUBS': 'inline label', 'USO': 'inline label', 'DSProcesso': 'inline label', 'NOME_ACEN': 'inline label', 'REG_PLANEJ': 'inline label', });
lyr_MaioresProdutoresTtulos_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});