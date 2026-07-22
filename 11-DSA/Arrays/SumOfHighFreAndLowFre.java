import java.util.*;
class SumOfHighFreAndLowFre{
    public int sumHighestAndLowestFrequency(int[] nums) {
        int max = Arrays.stream(nums).max().getAsInt();
        int hash[] = new int[max+1];
        for(int e : nums){
            hash[e]++;
        }
        return (SumOfHighFreAndLowFre.getMax(hash))+(SumOfHighFreAndLowFre.getMin(hash));
    }
    public static int getMax(int[] arr){
        int max = 0;
        for(int e : arr){
            if(max<e) 
                max = e;
        }
        return max;
    }
      public static int getMin(int[] arr){
        int min= Integer.MAX_VALUE;
        for(int e : arr){
            if(min>e && e != 0) 
                min = e;
        }
        return min;
    }
    public static void main(String[] args) {
        int nums[] = {5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000};

        System.out.println(new SumOfHighFreAndLowFre().sumHighestAndLowestFrequency(nums));
    }
}