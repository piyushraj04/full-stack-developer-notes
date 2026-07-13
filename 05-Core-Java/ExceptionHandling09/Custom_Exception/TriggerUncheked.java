
class TriggerUncheked{
    public static void triggerUncheked(int n){
        if(n==0){
            throw new MyCustomUncheckedException("Throws error");
        }
    }
}