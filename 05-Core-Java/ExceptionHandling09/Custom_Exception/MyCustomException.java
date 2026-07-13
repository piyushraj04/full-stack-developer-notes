package ExceptionHandling09.Custom_Exception;

public class MyCustomException extends Exception {

    MyCustomException(){

    }

    MyCustomException(String msg){
        super(msg);
    }
    
}
