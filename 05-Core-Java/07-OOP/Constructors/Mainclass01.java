// package 07-OOP.Constructors;

public class Mainclass01 {

    int a;
    double d; 
    String s;
    static float f;

    Mainclass01(){
        // super();
        System.out.println("Constructor is executed...");
    }
    {
        System.out.println("IIB is executed...");
    }
    static{
        System.out.println("SIB is executed...");
    }

    public static void main(String[] args) {
        Mainclass01 mainclass = new Mainclass01();
    }
    
}
