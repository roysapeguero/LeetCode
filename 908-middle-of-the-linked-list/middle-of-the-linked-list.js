/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let once = head 
    let twice = head

    while (twice && twice.next) {
        once = once.next
        twice = twice.next.next
    }
    return once
};

/*
------------------------------example 1------------------------------

        o
list1 = [1, 2, 3, 4, 5]
        t

           o
list1 = [1, 2, 3, 4, 5]
              t

              o
list1 = [1, 2, 3, 4, 5]
                    t

------------------------------example 2------------------------------

         o
list2 = [1, 2, 3, 4, 5, 6]
         t

            o
list2 = [1, 2, 3, 4, 5, 6]
               t

               o
list2 = [1, 2, 3, 4, 5, 6]
                     t
                     
                  o
list2 = [1, 2, 3, 4, 5, 6] null
                           t
*/