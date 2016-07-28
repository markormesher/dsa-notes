import java.util.NoSuchElementException;

@SuppressWarnings("Duplicates")
public class DoublyLinkedList<E> {

	private int size = 0;
	private Node head = null;
	private Node tail = null;

	private class Node {
		E data;
		Node next;
		Node prev;

		public Node(E data, Node next, Node prev) {
			this.data = data;
			this.next = next;
			this.prev = prev;
		}
	}

	public void insertAtHead(E e) {
		Node toInsert = new Node(e, head, null);
		if (head != null) head.prev = toInsert;
		head = toInsert;
		if (tail == null) tail = toInsert;
		++size;
	}

	public void insertAtTail(E e) {
		Node toInsert = new Node(e, null, tail);
		if (tail != null) tail.next = toInsert;
		tail = toInsert;
		if (head == null) head = toInsert;
		++size;
	}

	public E getHead() {
		if (size == 0) throw new NoSuchElementException();
		return head.data;
	}

	public E getTail() {
		if (size == 0) throw new NoSuchElementException();
		return tail.data;
	}

	public E removeHead() {
		if (size == 0) throw new NoSuchElementException();
		Node toReturn = head;
		head = head.next;
		if (head != null) head.prev = null;
		--size;
		return toReturn.data;
	}

	public E removeTail() {
		if (size == 0) throw new NoSuchElementException();
		Node toReturn = tail;
		tail = toReturn.prev;
		if (tail != null) tail.next = null;
		--size;
		return toReturn.data;
	}

	public int size() {
		return size;
	}

	public boolean isEmpty() {
		return size == 0;
	}

}