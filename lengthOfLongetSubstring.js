
var lengthOfLongestSubstring = function(s) {
    /* var max = 0;
    var current = 0;
    var map = {};
    var start = 0;
    for(var i = 0; i < s.length; i++) {
        if(map[s[i]] !== undefined) {
            start = Math.max(map[s[i]], start);
        }
        current = i - start + 1;
        max = Math.max(max, current);
        map[s[i]] = i + 1;
    }
    return max; */

    let set = new Set();
    let left = 0;
    let right = 0;
    let maxSubString = 0;


    while(right < s.length) 
    {
        if(!set.has(s.charAt(right)))
        {
            set.add(s.charAt(right));
            maxSubString = Math.max(maxSubString, set.size);
            right++;
        } else 
        {
            set.delete(s.charAt(left));
            left++;
        }
    }
    
    return maxSubString;
}

