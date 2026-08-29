class Autoboxing{
    public void checkAutoxing(Integer i){
        System.out.println(i);
    }

    public static void main(String[] args) {
        Autoboxing autoboxing = new Autoboxing();

        int i = 10;
        autoboxing.checkAutoxing(i);



        Integer a = 1;
        Integer b = 1;
        System.out.println(a==b);
    }
}