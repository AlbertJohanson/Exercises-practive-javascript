var addTwoNumbers = function(l1, l2) {

    var result = new ListNode(0);
    var current = result;
    var carry = 0;
    
    while (l1 || l2 || carry) {
        var sum = carry;
        if (l1) {
        sum += l1.val;
        l1 = l1.next;
        }
        if (l2) {
        sum += l2.val;
        l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    
    return result.next;
};

addTwoNumbers([2,4,3], [5,6,4]);