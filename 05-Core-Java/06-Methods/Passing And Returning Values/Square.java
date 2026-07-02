
import java.util.Scanner;
public class Square {
    public int square(int a){
        return a*a;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the no. ");
        int no = sc.nextInt();
        Square sq = new Square();
        System.out.println(sq.square(no));
        sc.close();
    }
    
}
