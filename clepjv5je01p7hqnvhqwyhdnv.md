# Sneak Peek at Linked List in Java

Linked Lists are an important data structure used in computer science to store and manipulate data. Each node in a linked list has a data element and a pointer to the node after it in the collection. The initial node and the last node are referred to as the head and tail, respectively. We will examine how to implement a linked list in Java without using any inbuilt package.

## **Creating a Node Class**

Creating a node class is the first step in making a linked list. A data element and a pointer to the following node are present in each node of the linked list. The following is how we can make a node class:

```java
class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```

The above code defines a Node class that has an integer data element and a next pointer. The constructor initializes the data element and sets the next pointer to null.

## **Creating a Linked List Class**

```java
class LinkedList {
    Node head;

    public void add(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public void remove(int data) {
        if (head == null) {
            return;
        }

        if (head.data == data) {
            head = head.next;
        } else {
            Node current = head;
            while (current.next != null && current.next.data != data) {
                current = current.next;
            }
            if (current.next != null) {
                current.next = current.next.next;
            }
        }
    }

    public void print() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
}
```

This code defines a LinkedList class that has a head node and methods to add, remove and print elements in the list. The add method adds a new node at the end of the list. The remove method removes a node with a given data element from the list. The print method prints all the elements in the list.

## **Test the Linked List Code**

We can now test the Linked List by creating an object of the LinkedList class and adding, removing, and printing elements in the list.

```java
public class Main {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);

        list.print();

        list.remove(3);

        list.print();
    }
}
```

The above code creates a LinkedList object and adds five elements to the list. It then prints all the elements in the list and removes the element with value 3. Finally, it prints the updated list.

## **Conclusion**

In this blog post, We looked at implementing a linked list in Java without the aid of an existing package. In addition to a linked list class with a head node and add, remove, and print methods, we also constructed a node class with a data element and next pointer. Next, we examined the Linked List