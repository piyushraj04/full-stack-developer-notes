// package 07-OOP.Singletone Class;
class Singletone{
    int a = 10;
    String name = "Piyush";

    //rule 01
    private Singletone(){};

    //rule 02
    private static Singletone obj = null;

    //rule 03
    public static Singletone getSingletone(){
        if(obj == null){
            obj =  new Singletone();
        }
        return obj;
    }

}
public class LazySingletone {
    public static void main(String[] args) {

        Singletone ref = Singletone.getSingletone();
        Singletone ref2 = Singletone.getSingletone();
        Singletone ref3 = Singletone.getSingletone();

        System.out.println(ref);
        System.out.println(ref2);
        System.out.println(ref3);
        
    }
    
}
