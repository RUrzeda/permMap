var size = 0;
var placement = 'point';
function categories_CompartimentaoGeotectonica_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Arco Magmático de Goiás - Granitóides':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,26,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arco Magmático de Goiás-Complexo Granulítico':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,35,247,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arco Magmático de Goiás-Intrusivas Máfica-ultramáficas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arco Magmático de Goiás-Sequências Metavulcanossedimentares':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,206,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bacia Cenozóica-Bacia do Bananal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,49,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bacia de Antepaís':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bacia do Paraná':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,250,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bacia Intracontinental - Sequência Pós-Rift':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bacia Intracontinental - Sequência Rift':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,128,47,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Bacia Oceânica Mesoproterozóica-Complexos máfico-ultramáficos\', \'Bacia Oceânica Mesoproterozóica-Granitos Sin a Tardi-tectônicos\', \'Bacia Oceânica Mesoproterozóica-Sequências Metavulcanossedimentares\']':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bacia Sanfranciscana':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,237,150,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cinturões Paleoproterozóicos-Sequências Metassedimentares':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,200,47,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cinturões Paleoproterozóicos-Sequências Metavulcanossedimentares':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(6,230,219,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cinturões Paleoproterozóicos-Terrenos Granito-gnáissicos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,188,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emb.BSB - Fx. BSB - TGG - Complexos Granito-Gnáissico':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,43,235,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emb.BSB - Fx. BSB - TGG - Greenstone Belt':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(50,221,104,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emb.BSB - Fx. BSB - TGG - Intrusivas Máfica-ultramáficas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,168,116,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Emb.BSB - Fx. BSB - TGG - Sequências metassedimentares arqueanas/paleoproterozóicas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,219,213,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Faixa Araguaia-Zona Interna':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,211,33,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Faixa Brasília-Zona Externa-Bacia de Margem Passiva':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,67,58,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Faixa Brasília-Zona Interna-Bacia Marginal de Arco':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,127,161,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Faixa Brasília-Zona Interna-Intrusões Máfico-ultramáficas Acamadadas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(181,219,84,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Faixa Brasília-Zona Interna-Raiz de Arco Magmático':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,174,56,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Faixa Paraguai-Zona Interna':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(187,237,239,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Graben Água Bonita':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,98,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Massa de agua':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CompartimentaoGeotectonica_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("GEOTEC");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_CompartimentaoGeotectonica_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
