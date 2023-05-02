/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    if(head == null)
    return head;

    const newHead = new ListNode(0);
    newHead.next = head;

    let fast = newHead;
    let slow = newHead;

    for(let i=1;i<= n+1;i++){
        fast = fast.next;
        }

        while(fast != null){
           fast = fast.next;
           slow = slow.next;
        }
        
        slow.next = slow.next.next;
        return newHead.next;
}





