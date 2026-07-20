import java.util.HashMap;
import java.util.Map;

class NoOfOcc{
    public static int max(int[] arr){
        int max = arr[0];
        int length = arr.length;
        for(int i = 1; i < length; i++){
            if(max<arr[i]){
                max = arr[i];
            }
        }
        return max;
    }

    public static void freArr(int[] arr,int[] hash){
        
        int orgLen = arr.length;
        
        for(int i = 0; i < orgLen; i++){
            hash[arr[i]]++;
        }
    }
        public static void freChar(char[] arr1,int[] hash2){
        
        int orgLen = arr1.length;
        
        for(int i = 0; i < orgLen; i++){
            ((hash2[((int)(arr1[i]))-'a']))++;
            // System.out.println((int)(arr1[i]));
        }
        
        
    }


    public static void main(String[] args) {
        int[] arr = {1,5,6,5,6,7,4};
        char[] arr1 = {'a','b','d','e','r'};
        int[] hash2 = new int[26];
        Map<Integer,Integer> map = new HashMap<>();
        

       
        int size = NoOfOcc.max(arr)+1;
        int[] hash = new int[size];
        NoOfOcc.freChar(arr1, hash2);
        for(int i = 0; i < 26; i++){
            System.out.println((char)(97+i)+"--"+hash2[i]);
        }


    }
}