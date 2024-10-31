

/* 
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
function connectedCell(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    let largestArea = Number.MIN_SAFE_INTEGER
    
    const visitedCol = new Array(cols).fill(false)
    let visited = []
    
    for (let i = 0; i < rows; i++) {
        visited.push([...visitedCol])
    }
         
    
    const dfs = (row, col) => {
        if (row < 0 || 
            col < 0 || 
            row >= rows || 
            col >= cols || 
            matrix[row][col] == 0 || 
            visited[row][col]) {
                return 0
            }
        let area = 0        
        visited[row][col] = true
        area++
        
        // Vertical
        area += dfs(row + 1, col)
        area += dfs(row - 1, col)
        
        // Horizontal
        area += dfs(row, col + 1)
        area += dfs(row, col - 1)
        
        // Diagonal
        area += dfs(row + 1, col - 1)
        area += dfs(row + 1, col + 1)
        area += dfs(row - 1, col - 1)
        area += dfs(row - 1, col + 1)
           
        if (area > largestArea) {
            largestArea = area
        }
            
        return area
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dfs(row, col)            
        }        
    }                      
            
    return largestArea
}


input = [[1,1,0,0],[0,1,1,0],[0,0,1,0],[1,0,0,0]]


console.log(connectedCell(input))