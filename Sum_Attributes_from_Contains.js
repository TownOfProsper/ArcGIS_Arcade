//A calculate field expression to sum a numeric attribute from a FeatureSet derived from CONTAINS() to a new field
var insideGeometry = FEATURESETBYNAME($datastore, "FeatureClassName")
var containerGeometry = $feature
var features_within_container = CONTAINS(containerGeometry, insideGeometry)
var calculated_area = DEFAULTVALUE(SUM(features_within_container, "Shape_Area"), 0)

return calculated_area
