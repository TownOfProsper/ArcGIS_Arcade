var search_duplicate = $feature.A_FIELD_NAME_HERE
var features = FEATURESETBYNAME($datastore, "Featureclass Name Here")
// the @ is used to reference the variable in a way that is SQL-compliant
var sqlExpression = "A_FIELD_NAME_HERE = @search_duplicate"
var result = FILTER(features, sqlExpression)

WHEN(
    COUNT(result) > 1, "Duplicate Value",
    "Unique"
)
