import java.util.ArrayList;
import java.util.List;

public class Mainclass {
    public static void main(String[] args) {
        List<Vehicle> vehicleList = new ArrayList<>();
        vehicleList.add(new Bus("Volvo Bus"));
        vehicleList.add(new Car("Ferrari Car"));

        List<Bus> busList  = new ArrayList<>();
        
        busList.add(new Bus("Piyush Bus"));
        busList.add(new Bus("Mayank Bus"));

        Print printObj = new Print();
        printObj.setPrintValues(busList);

        List<?> lists = busList;
        System.out.println(lists.get(0));
        
    }
}
