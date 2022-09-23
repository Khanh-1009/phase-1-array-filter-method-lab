// Code your solution here

function findMatching(collection, driver) {
    return collection.filter(name => name.toLowerCase() == driver.toLowerCase())
    }
    
function fuzzyMatch(collection, driver) {
    return collection.filter(name => name[0] == driver[0]);
}

function matchName(collection, driver){
 
    return collection.filter(names => names.name.toLowerCase() == driver.toLowerCase());
    
}
