package Practice;

import java.util.ArrayList;
import java.util.List;

class Pair implements Comparable<Pair>{
    Character c;
    Integer fre;
    Pair(Character c, Integer fre){
        this.c = c;
        this.fre=fre;
    }

    @Override
    public int compareTo(Pair p){
         if((this.c.equals(p.c))){
            return (Integer)(this.c - p.c);
         }
         else{
            return -1*(this.fre - p.fre);
         }
    }
}
public class ComperatorFre  {

    public List<Character> frequencySort(String s) {
        // Your code goes here

        Pair[] freq = new Pair[26];
        for(int i = 0; i < 26; i++){
            freq[i] = new Pair((char)(i+'a'), 0);
        }



        List<Character> list = new ArrayList<>();
        int[] hash = new int[26];
        for (int i = 0; i < s.length(); i++) {
            hash[s.charAt(i) - 'a']++;
        }
       for(int i  = 0; i< s.length();i++){

       }
        return list;

    }

    public static int getMax(int[] hash) {
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < hash.length; i++) {
            if (max < hash[i]) {
                max = hash[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {

    }

}
