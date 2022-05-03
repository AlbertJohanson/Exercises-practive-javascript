const reverseList = (head) => 
{
    
    let prev = null;
    let curr = head;
    let nextTemp = curr.next;


    while(curr != null)
    {
        nextTemp = curr.next; 
        curr.next = prev; 
        prev = curr; 
        curr = nextTemp; 
    }

    return prev;
}