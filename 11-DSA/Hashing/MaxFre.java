// package Hashing;

/**
 * MaxFre
 */
public class MaxFre {

    public static int mostFrequentElement(int[] nums) {
        int maxCnt = 0;
        int el = 0;
        for (int i = 0; i < nums.length; i++) {
            int cnt = 0;
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    cnt++;
                }
            }
            if (maxCnt < cnt) {
                maxCnt = cnt;
                el = nums[i];
            }
        }
        return el;
    }

    public static void main(String[] args) {
        int[] nums = { 100, 200, 200, 300, 300 };
        System.out.println(MaxFre.mostFrequentElement(nums));

    }

}