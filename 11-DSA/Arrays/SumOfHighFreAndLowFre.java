import java.util.*;
class SumOfHighFreAndLowFre{
    public int sumHighestAndLowestFrequency(int[] nums) {
        int max = Arrays.stream(nums).max().getAsInt();
        int hash[] = new int[max+1];
        for(int e : nums){
            hash[e]++;
        }
        int lowFre = 1;
        int highFre = 0;
        for(int i = 0 ; i < hash.length; i++){
            if(lowFre > hash[i] && hash[i] != 0){
                lowFre = hash[i];
            }

            if(highFre<hash[i]){
                highFre = hash[i];
            }
        }
        System.out.println(nums.length);
        return lowFre+highFre;
    }
    public static void main(String[] args) {
        int nums[] = {5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000,5000};

        System.out.println(nums.length);
    }
}