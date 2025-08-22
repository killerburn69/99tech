var sum_to_n_a = function(n) {
    // your code here
    // i will using for loop to sum from 1 to n. The complexity is O(n)
    let count = 0;
    for(let i = 1; i<=n;i++){
        count = count + i
    }
    return count
};

var sum_to_n_b = function(n) {
    // your code here
    // i will using a recursion.The complexity is O(n)
    if (n === 1)
        return 1
    return n + sum_to_n_b(n-1)
};

var sum_to_n_c = function(n) {
    // your code here
    // i will using a method from math is (n*(n+1))/2. This complexity is O(1)

    return (n*(n+1))/2
};
