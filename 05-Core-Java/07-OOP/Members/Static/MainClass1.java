class Sample {
    static int x = 10;

    static double y = 2.5;

    static void help() {
        System.out.println("Help static method executed from Parent class...");
    }

    // int a = 35;

    // public static void send() {
    // // System.out.println(a);
    // System.out.println("Send method executed...");
    // }

    // static {
    // System.out.println("Static block executed...");
    // }
}

public class MainClass1 extends Sample {
    static void help(){
        System.out.println("Help static method executed from child class...");
    }
    public static void main(String[] args) {
        System.out.println(Sample.x);

        System.out.println(Sample.y);

  help();

       Sample.help();;

    //    Sample.send();

    }
}