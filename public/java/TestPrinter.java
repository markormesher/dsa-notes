import java.io.PrintStream;

public class TestPrinter {

	private static PrintStream sysOut = System.out;

	private static final String ANSI_RESET = "\u001B[0m";
	private static final String ANSI_RED = "\u001B[31m";
	private static final String ANSI_GREEN = "\u001B[32m";
	private static final String ANSI_YELLOW = "\u001B[33m";

	private static final int lineLength = 50;
	private static int lastConditionLength = 0;

	public static void condition(String s) {
		lastConditionLength = s.length();
		sysOut.print(s);
	}

	public static void result(boolean pass) {
		if (pass) {
			pass();
		} else {
			fail();
		}
	}

	public static void pass() {
		printLinePadding();
		printGreen("OK");
		newLine();
	}

	public static void fail() {
		printLinePadding();
		printRed("FAIL");
		newLine();
	}

	public static void warning(String s) {
		printLinePadding();
		printYellow(s);
		newLine();
	}

	private static void printLinePadding() {
		for (int i = lastConditionLength; i < lineLength; ++i) {
			sysOut.print(".");
		}
	}

	private static void printRed(String s) {
		sysOut.print(ANSI_RED + s + ANSI_RESET);
	}

	private static void printGreen(String s) {
		sysOut.print(ANSI_GREEN + s + ANSI_RESET);
	}

	private static void printYellow(String s) {
		sysOut.print(ANSI_YELLOW + s + ANSI_RESET);
	}

	private static void newLine() {
		sysOut.println();
	}

}
