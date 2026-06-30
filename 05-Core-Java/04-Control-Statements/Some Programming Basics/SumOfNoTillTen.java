import java.util.Scanner;
class SumOfNoTillTen{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the starting  no. :- ");
        int a = sc.nextInt();
        System.out.println("Enter the ending no. :- ");
        int b = sc.nextInt();

        int sum = 0;

        while(a<=b){
            sum+=a;
            a++;
        }
        System.out.println("The total sum is "+sum);

    }
}