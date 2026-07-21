import java.util.Arrays;

class LargestEle{
    public static int mostFrequentElement(int[] nums){
        int max = LargestEle.getMax(nums);
        int[] hash = new int[max+1];
        for(int e : nums){
            hash[e]++;
        }


        int maxCnt = 0;
        int el = 0;
        for(int i = 0; i < hash.length; i++){
            if(maxCnt<hash[i]){
                maxCnt = hash[i];
                el = i;
            }
            else if(maxCnt==hash[i] && el>i){
                el = i;
            }
            
        }
        return el;

    }
    public static int getMax(int[] nums){
        int max = 0;
        for(int e : nums){
            if(max<e){
                max = e;
            }
        }
        return max;
    }

     public static int secondMostFrequentElement(int[] nums) {
        int max = Arrays.stream(nums).max().getAsInt();
        int hash[] = new int[max+1];
        for(int el : nums){
            hash[el]++;
        }
        int maxCnt = Arrays.stream(hash).max().getAsInt();
        int el = 0;
        int secMaxCnt = 0;
        for(int i = 0; i < hash.length; i++){
            if((secMaxCnt<hash[i]) && (maxCnt != hash[i])){
                secMaxCnt = hash[i];
                el = i;
            }
            else if(secMaxCnt < maxCnt && (secMaxCnt == hash[i] && el > i)){
                el = i;
            }
        }
        return el;
    }

    public static void main(String[] args) {
        
        int[] arr = {1, 2, 2, 3, 3, 3};
       System.out.println( LargestEle.mostFrequentElement(arr));
       System.out.println(LargestEle.secondMostFrequentElement(arr));

    }

}