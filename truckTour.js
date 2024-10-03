
function truckTour(petrolpumps) {

    const size = petrolpumps.length

    for (let start = 0; start < petrolpumps.length; start++) {
        if ((petrolpumps[start][0] < petrolpumps[start][1])) continue

        let tank = 0
        let position = start
        let pumpCount = 0

        while (true) {
            if (pumpCount == size) return start; // All pumps has been visited
            if (tank < 0) break                  // Not enough petrol to move further

            const index = position % size
            tank += petrolpumps[index][0] - petrolpumps[index][1]             

            position++
            pumpCount++
        }

    }

}

const tour = [[1,5], [10,3], [3,4]]

console.log(truckTour(tour))