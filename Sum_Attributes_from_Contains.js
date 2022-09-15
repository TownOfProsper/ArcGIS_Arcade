//https://developers.arcgis.com/arcade/function-reference/geometry_functions/#contains2

var insideGeometry = FEATURESETBYNAME($datastore, "FeatureClassName")
var containerGeometry = $feature
var features_within_container = CONTAINS(containerGeometry, insideGeometry)
var calculated_area = DEFAULTVALUE(SUM(features_within_container, "Shape_Area"), 0)

return calculated_area
