class NewProcess{
    static int num;
    
    NewProcess(){
        System.out.println("I'm invoked...");
        System.out.println("2");
    }
    {
        System.out.println("3");
        System.out.println("I'm non-static/instance block...");
    }
    static{
        System.out.println("1");
        System.out.println("I'm static block...");
        System.out.println("Num is :"+num);
    }
    public static void main(String[] args) {
        NewProcess newProcess = new NewProcess();
        
    }
}