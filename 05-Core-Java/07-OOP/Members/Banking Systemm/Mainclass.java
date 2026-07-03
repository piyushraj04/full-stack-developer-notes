
import java.util.Scanner;

class BankAccount {
    long accNum;
    double accBal;

    public void withdraw(double amt) {
        System.out.println((accBal >= amt) ? ("Withrawal successfull...") : ("Amount is not enough to withdraw"));
    }

    void deposit(double accBal) {
        this.accBal = accBal;
        System.out.println("deposit successfull");
    }
}

public class Mainclass {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BankAccount acc1 = new BankAccount();
        acc1.accNum = 14563654789l;
        acc1.accBal = 0;

        System.out.println("Enter the amt to deposit: ");
        acc1.deposit(sc.nextDouble());
        acc1.withdraw(26000);
        sc.close();
    }

}
