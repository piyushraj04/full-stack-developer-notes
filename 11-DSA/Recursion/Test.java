class Test{
    public void printName(int cnt){
        //base condn
        if(cnt==0){
            return;
        }
        System.out.println("Piyush");
        printName(--cnt);
        //recursive call
    }
    public static void main(String[] args) {
        Test t = new Test();
        t.printName(4);        
    }
}