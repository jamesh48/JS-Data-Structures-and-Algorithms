// Leetcode #2079
// https://leetcode.com/problems/watering-plants/

const wateringPlants = (plants, capacity) => {
    let i = -1;
    let steps = 0;
    let waterLevel = capacity;
    
    while ( i < plants.length - 1) {
        // Plant consumes water level, gardener steps forward.         
        if (waterLevel >= plants[i + 1]) {
            waterLevel = waterLevel - plants[i + 1];
            i++;
            steps++;
        } else if (waterLevel < plants[i + 1]) {
        //  Return to river
            steps += i + 1;
        //  Refill Can
            waterLevel = capacity;
        //  return to Plant
            steps += i + 1;
        }
    }
    return steps;
};


