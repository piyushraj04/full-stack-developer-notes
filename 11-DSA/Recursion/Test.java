import java.util.Scanner;

class Test{
    public void printName(int cnt){
        //base condn
        if(cnt==0){
            return;
        }
        
        printName(--cnt);
        System.out.println("Piyush");
        //recursive call
    }

    public void nTimesX(int x, int n){
        if(n==0){
            return;
        }
        System.out.println(x);
        nTimesX(x, --n);
    }

    public void oneToN(int x,int n){
        if(x>n){
            // System.out.println(x);
            return;
        }
        
        oneToN(x+1,n);  //0--> last time sooooooooooooo:-----
       System.out.println(x);
    }
    public static void main(String[] args) {
        Test t = new Test();
        // t.printName(4); 
        Scanner sc = new Scanner(System.in);
        // System.out.println("Enter x : ");
        // int x = sc.nextInt();
        
        // System.out.println("Enter n : ");
        // int n = sc.nextInt();

        // t.nTimesX(x,n);

        t.oneToN(1,5);
        sc.close();
    }
}