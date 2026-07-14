import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.TreeSet;

class VarLearning{
    // int x = 10;
    double add (int x,double y){
        var sum = x+y;
        return sum;
    }

    public static void main(String[] args) {
        VarLearning varLearn = new VarLearning();
        var a = 10;
        var b = 20;
        System.out.println(varLearn.add(a, b));

        ArrayList<Integer> al = new ArrayList<>();
        al.add(2);
        al.add(4);
        al.add(6);
        System.out.println(al);

        
        System.out.println(al.remove(2));
        System.out.println(al.getClass());


        Iterator<Integer> i = al.iterator();
        while(i.hasNext()){
            System.out.println(i.next());
        }


        for(var el : al){

            System.out.println(el);
        }

        al.add(5);
        al.add(8);
        al.add(9);
        al.add(5);
        al.add(5);
        al.add(5);
        System.out.println(al);
        System.out.println("Frequency -- "+ Collections.frequency(al, 5));
        

        TreeSet<Integer> ts = new TreeSet<>();

        ts.add(8);
        ts.add(5);
        ts.add(6);
        ts.add(9);
        System.out.println(ts);
        System.out.println(ts.floor(5)); //5
        System.out.println(ts.floor(9)); //9
        System.out.println(ts.floor(7)); //6
        System.out.println(ts.floor(11)); //9



        




    }





}