public class Mainclass{
    public static void main(String[] args) {
        MyInterface obj = () -> System.out.println("Functional interface is executing...");
        obj.display();
    }
}
