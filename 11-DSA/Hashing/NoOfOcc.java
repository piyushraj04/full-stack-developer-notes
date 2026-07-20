class NoOfOcc{
    public static int max(int[] arr){
        int max = arr[0];
        int length = arr.length;
        for(int i = 1; i < length-1; i++){
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

    public static void main(String[] args) {
        int[] arr = {1,5,6,5,6,7,4};
        int size = NoOfOcc.max(arr)+1;
        int[] hash = new int[size];
        // System.out.println(NoOfOcc.max(arr));
        NoOfOcc.freArr(arr,hash);
         
        System.out.println("The frequency of "+ 5 + " is "+hash[5]);

    }
}