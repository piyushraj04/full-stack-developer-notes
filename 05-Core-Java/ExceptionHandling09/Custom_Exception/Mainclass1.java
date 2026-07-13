package ExceptionHandling09.Custom_Exception;

public class Mainclass1 {
    public static void main(String[] args) {
        // Trigger trigger = new Trigger();
        try {
            Trigger.triggerException(25);
            Trigger.triggerException(20);
            Trigger.triggerException(25);
            Trigger.triggerException(30);
        } catch (MyCustomException e) {
            System.err.println("Exceptions occurs " + e.getMessage());
        } finally {
            System.out.println("Must executed...");
        }
    }

}
