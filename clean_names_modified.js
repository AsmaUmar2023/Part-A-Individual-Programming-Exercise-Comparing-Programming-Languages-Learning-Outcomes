// cleanNames_modified.js
// Modified by: [Your Name]
// Change: Added case-insensitive deduplication and basic error checking.

function processNames(names) {
    // Check if input is an array (error case modification)
    if (!Array.isArray(names)) {
        throw new Error("Input must be an array of strings.");
    }
    
    // Normalize case (Title Case) to ensure 'alice' and 'Alice' are treated as one unique name
    // Using .map() for consistent array-based transformation
    const normalizedNames = names.map(name => {
        if (typeof name !== 'string') return ""; // skip non-string inputs (basic sanitization)
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
    
    // Using Set for efficient deduplication of the normalized names
    // Then spread into an array for sorting
    let uniqueNames = [...new Set(normalizedNames)]; 
    
    // Sort alphabetically (ascending) for predictable output
    uniqueNames.sort(); 
    
    return uniqueNames;
}

// Test list with duplicates and inconsistent capitalisation
const testNames = ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"];

try {
    console.log("Original list:", testNames);
    console.log("Processed list (Modified):", processNames(testNames));
} catch (error) {
    console.error("An error occurred during name processing:", error.message);
}
