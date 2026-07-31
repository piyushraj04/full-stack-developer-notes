import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class Solution {
    public static List<Character> frequencySort(String s) {
        // Your code goes here
        List<Character> list = new ArrayList<>();
        list.add('a');
        Map<Integer, Character> map = new TreeMap<>();
        Integer[] hash = new Integer[26];

        for (Integer i = 0; i < s.length(); i++) {
            hash[s.charAt(i) - 'a']++;
        }

        for (int i = 0; i < hash.length; i++) {
            if (hash[i] > 0) {
                Integer max = Solution.getMax(hash);
                list.add((char) (i + 'a'));
                hash[i] = 0;
            }
        }
        return list;
    }

    public static Integer getMax(Integer[] hash) {
        Integer max = Integer.MIN_VALUE;
        for (int i = 0; i < hash.length; i++) {
            if (max < hash[i]) {
                max = hash[i];
            }
        }
        return max;
    }
    public static void main(String[] args) {
        Solution.frequencySort("tree");
    }

}
