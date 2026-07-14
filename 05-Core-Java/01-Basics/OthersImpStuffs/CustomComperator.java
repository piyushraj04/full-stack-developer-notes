// package 01-Basics.OthersImpStuffs;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.swing.undo.CompoundEdit;

public class CustomComperator {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(5);
        list.add(7);
        list.add(3);
        list.add(12);

        System.out.println(list);
        Collections.sort(list);
        System.out.println(list);

        //custom

        // Collections.sort(list, new Comparator<Integer>(){
        //     @Override
        //     public int compare(Integer o1,Integer o2){
        //         if(o1<o2){
        //             return 1;
        //         }
        //         else if(o1>o2){
        //             return -1;
        //         }
        //         return 0;
        //     }
        // });

        // System.out.println(list);

        //using lembda function
        Collections.sort(list,(num1,num2)->num2-num1);
        System.out.println(list);
    }
    
}
