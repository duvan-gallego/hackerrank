// Find the number of islands in the given grid (Matrix)


function numIslands(grid) {
    const rows = grid.length
    const cols =  grid[0].length
    let islands = 0
    const visitedcols = new Array(cols).fill(false)
    let visited = []

    for (let i = 0; i < rows;i++) {
        visited.push([...visitedcols])
    }


    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] || grid[row][col] == 0) return

        visited[row][col] = true

        // Explore all four directions
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }


    for (let row = 0; row < rows;row++) {
        for (let col = 0; col < cols;col++) {
            if (!visited[row][col] && grid[row][col] == 1) {
                islands++
                dfs(row, col)
            }
        }
    }    

    return islands
}


const grid = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,1]
]

const inputs = [
    [[
        [1,1,1,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,1]
    ], 2],
    [[
        [1,1,1,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,0]
    ], 1],
    [[
        [1,1,1,1,0],
        [1,1,0,0,0],
        [1,1,0,1,0],
        [0,0,0,0,1]
    ], 3],
]

const test = (testCases) => {

    let testFailed = false
    for (const t of testCases) {
        const result = numIslands(t[0]) 
        if (result != t[1]) {
            console.log(`TEST FAILED, WAITING ${t[1]} GOT ${result}`)
            testFailed = true
        }
    }

    if (!testFailed) {
        console.log("ALL TESTS PASSED")
    }
}

test(inputs)