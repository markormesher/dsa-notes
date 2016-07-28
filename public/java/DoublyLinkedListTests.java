import java.util.NoSuchElementException;

public class DoublyLinkedListTests {

	public static void main(String... args) {
		DoublyLinkedList<Integer> dll = new DoublyLinkedList<>();

		TestPrinter.condition("Should be empty...");
		TestPrinter.result(dll.isEmpty());

		TestPrinter.condition("Inserting 2 at head...");
		dll.insertAtHead(2);
		TestPrinter.pass();

		TestPrinter.condition("Size should be 1...");
		TestPrinter.result(dll.size() == 1);

		TestPrinter.condition("Should not be empty...");
		TestPrinter.result(!dll.isEmpty());

		TestPrinter.condition("Inserting 1 at head...");
		dll.insertAtHead(1);
		TestPrinter.pass();

		TestPrinter.condition("getHead() should be 1...");
		TestPrinter.result(dll.getHead() == 1);

		TestPrinter.condition("removeHead() should be 1...");
		TestPrinter.result(dll.removeHead() == 1);

		TestPrinter.condition("getHead() should be 2...");
		TestPrinter.result(dll.getHead() == 2);

		TestPrinter.condition("Inserting 3 at tail...");
		dll.insertAtTail(3);
		TestPrinter.pass();

		TestPrinter.condition("Inserting 4 at head...");
		dll.insertAtTail(4);
		TestPrinter.pass();

		TestPrinter.condition("Size should be 3...");
		TestPrinter.result(dll.size() == 3);

		TestPrinter.condition("getTail() should be 4...");
		TestPrinter.result(dll.getTail() == 4);

		TestPrinter.condition("removeTail() should be 4...");
		TestPrinter.result(dll.removeTail() == 4);

		TestPrinter.condition("removeTail() should be 3...");
		TestPrinter.result(dll.removeTail() == 3);

		TestPrinter.condition("removeTail() should be 2...");
		TestPrinter.result(dll.removeTail() == 2);

		TestPrinter.condition("Should be empty...");
		TestPrinter.result(dll.isEmpty());

		TestPrinter.condition("getHead() should throw error...");
		try {
			dll.getHead();
			TestPrinter.fail();
		} catch (NoSuchElementException ex) {
			TestPrinter.pass();
		}

		TestPrinter.condition("getTail() should throw error...");
		try {
			dll.getTail();
			TestPrinter.fail();
		} catch (NoSuchElementException ex) {
			TestPrinter.pass();
		}

		TestPrinter.condition("removeHead() should throw error...");
		try {
			dll.removeHead();
			TestPrinter.fail();
		} catch (NoSuchElementException ex) {
			TestPrinter.pass();
		}

		TestPrinter.condition("removeTail() should throw error...");
		try {
			dll.removeTail();
			TestPrinter.fail();
		} catch (NoSuchElementException ex) {
			TestPrinter.pass();
		}
	}

}
