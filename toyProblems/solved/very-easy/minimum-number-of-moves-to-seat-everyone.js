// Leetcode #2037
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/


// 12/22/21
const minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] > students[i]) {
            count += seats[i] - students[i]
        } else {
            count += students[i] - seats[i];    
        }
    }
    
    return count;
};
