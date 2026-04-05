# clean_names_modified.py
# Modified by: [Your Name]
# Change: Added case-insensitive deduplication to ensure unique real-world names are processed.

def process_names(names):
    # original logic: unique_names = list(set(names))
    # issue: 'Alice' and 'alice' are treated as different.
    
    # modified logic: Normalize all names to lower case for comparison
    # while preserving original input case if desired (not strictly required by task but better practice)
    # Here we'll just normalize to capitalized format for consistency (Title Case)
    
    # Using a list comprehension to normalize case before deduplicating
    normalized_names = [name.capitalize() for name in names] 
    
    # Convert to a set to remove duplicates (now case-independent)
    unique_names = list(set(normalized_names))
    
    # Sort alphabetically to maintain consistent output
    unique_names.sort()
    return unique_names

# Test list with duplicates and inconsistent capitalisation
test_names = ["Alice", "bob", "alice", "Charlie", "BOB", "dave", "Eve", "charlie"]

# Professional practice: Add input validation for robustness
if not all(isinstance(n, str) for n in test_names):
    print("Error: Input list must contain strings only.")
else:
    print("Original list:", test_names)
    print("Processed list (Modified):", process_names(test_names))
