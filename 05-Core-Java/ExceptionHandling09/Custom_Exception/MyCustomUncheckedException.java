
class MyCustomUncheckedException extends  RuntimeException
{
    MyCustomUncheckedException(){

    }
    MyCustomUncheckedException(String msg){
        super(msg);
    }
}