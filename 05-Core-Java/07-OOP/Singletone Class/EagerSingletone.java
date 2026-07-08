class SingletoneEager{
    private SingletoneEager(){};

    private static SingletoneEager ref = new SingletoneEager(); 

    public static SingletoneEager getSingletoneEager(){
        if(ref==null){
            ref = new SingletoneEager();
        }
        return ref;
    }

}

public class EagerSingletone{
    public static void main(String[] args) {
        SingletoneEager obj = SingletoneEager.getSingletoneEager();
        SingletoneEager obj2 = SingletoneEager.getSingletoneEager();
        SingletoneEager obj3 = SingletoneEager.getSingletoneEager();

        System.out.println(obj);
        System.out.println(obj2);
        System.out.println(obj3);
    }
}