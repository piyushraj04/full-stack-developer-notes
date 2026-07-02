import java.util.Scanner;

class Verify{
    public static boolean verify(int a){
        if(a%2==0){
            return true;
        }
        return false;
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value: ");
        int no = sc.nextInt();
        System.out.println( verify(no));;
        sc.close();
        
        
    }
}