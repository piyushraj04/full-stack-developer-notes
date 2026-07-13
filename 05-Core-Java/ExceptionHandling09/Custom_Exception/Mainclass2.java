
class Mainclass2{
    public static void main(String[] args) {
        try{
            TriggerUncheked.triggerUncheked(0);
        }
        catch(MyCustomUncheckedException e){
            System.out.println(e.getMessage());
        }
    }
}