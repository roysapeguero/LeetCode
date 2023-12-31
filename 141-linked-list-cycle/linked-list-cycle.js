/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head
    
    while (curr) {
        if (!curr.pos) {
            curr.pos = 1
            curr = curr.next
        } else return true
    }
    return false
};