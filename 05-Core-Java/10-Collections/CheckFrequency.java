import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class CheckFrequency{
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(10);
        list.add(10);
        list.add(20);
        list.add(40);
        list.add(10);
        list.add(20);
        list.add(40);
        list.add(10);
        list.add(20);
        list.add(40);
        list.add(10);
        list.add(20);
        list.add(40);
        System.out.println(list);
        System.out.println(Collections.frequency(list,10));
        
    }
}