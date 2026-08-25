public class GenericMethod {

    
    public <T> T getVal(T value){
        return value;
    }

    public <T> void display(T value){
        System.out.println(value);
    }
    public static void main(String[] args) {
        
        GenericMethod gm = new GenericMethod();
        
        Integer val = gm.getVal(1);
        System.out.println(val);

        String val2 = gm.getVal("Piyush");
        System.out.println(val2);

        gm.display("Piyush");
        gm.display(5);
    }
    
}
