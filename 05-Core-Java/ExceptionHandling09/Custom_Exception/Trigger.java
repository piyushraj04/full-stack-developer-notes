package ExceptionHandling09.Custom_Exception;

public class Trigger  {

    public static void triggerException(int n) throws MyCustomException{
        if(n%3==0 && n%5==0){
            throw new MyCustomException("Number is divisible by 3 and 5 both...");
        }
    }
    
}
