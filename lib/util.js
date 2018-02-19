/**
 * Shift a number vector to the right,
 * inserting Infinity on the left side and discarding
 * the last number on the right side
 * @param vector: [int]
 */
function shiftVector(vector) {
    // Shift vector to the right
    // Insert Infinity on left side
    let result = [Infinity];
    for (let i = 0; i < vector.length - 1; i++) {
        result.push(vector[i]);
    }
    return result;
}

/**
 * Calculate component-wise minimum of an array of vectors
 * eg minVector([[3,8,9],[4,4,4],[5,5,1]]) = [3,4,1]
 * @param vectors: [[int]]
 * @returns {Array}
 */
function minVector(vectors) {
    // Calculate component-wise minimum of vectors (array)
    let result = [];
    for (let i = 0; i < vectors[0].length; i++) {
        let components = [];
        vectors.forEach(v => components.push(v[i]));
        result.push(Math.min(...components));
    }
    return result;
}

module.exports = {
    shiftVector: shiftVector,
    minVector: minVector
};