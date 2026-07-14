import java.util.ArrayList;
import java.util.Iterator;

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





    }





}