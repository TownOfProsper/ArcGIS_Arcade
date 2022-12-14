//A calculate field expression to identify duplicates within a column and output the results to a new column
var search_duplicate = $feature.A_FIELD_NAME_HERE
var features = FEATURESETBYNAME($datastore, "Featureclass Name Here")
// the @ is used to reference the variable in a way that is SQL-compliant
var sqlExpression = "A_FIELD_NAME_HERE = @search_duplicate"
var result = FILTER(features, sqlExpression)
// this is an implicit return, probably not best practice
// also, this is an example of a string literal, new in 1.11
WHEN(
    COUNT(result) > 1, `Duplicate Value, frequency ${COUNT(result)}`,
    "Unique"
)
