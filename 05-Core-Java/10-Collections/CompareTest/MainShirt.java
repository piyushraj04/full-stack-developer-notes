import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

class SortByBrand implements Comparator<Shirt> {
    @Override
    public int compare(Shirt s1, Shirt s2) {
        return s1.brand.compareTo(s2.brand);
    }

}

class Shirt {

    Integer id;
    String brand;
    String color;
    Double price;
    String size;

    public Shirt(int id, String brand, String color, double price, String size) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.size = size;
    }

    @Override
    public String toString() {
        return "Shirt{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", color='" + color + '\'' +
                ", price=" + price +
                ", size='" + size + '\'' +
                '}';
    }
}

public class MainShirt {
    public static void main(String[] args) {
        List<Shirt> shirts = new ArrayList<>();

        shirts.add(new Shirt(101, "Nike", "Black", 1999.99, "M"));
        shirts.add(new Shirt(102, "Adidas", "White", 2499.50, "L"));
        shirts.add(new Shirt(103, "Puma", "Blue", 1799.00, "S"));
        shirts.add(new Shirt(104, "Levi's", "Green", 2299.75, "XL"));
        shirts.add(new Shirt(105, "US Polo", "Red", 1599.99, "XXL"));

        // Collections.sort(shirts,new SortByBrand());
        // Iterator<Shirt> i = shirts.iterator();
        // while(i.hasNext()){
        // System.out.println(i.next());
        // }

        // Comparator<Shirt> c = new Comparator<Shirt>() {
        //     public int compare(Shirt s1, Shirt s2) {
        //         return s1.color.compareTo(s2.color);
        //     }
        // };

        // Collections.sort(shirts, c);
        // Iterator<Shirt> i = shirts.iterator();
        // while (i.hasNext()) {
        //     System.out.println(i.next());
        // }

        // Comparator<Shirt> c = (s1,s2) -> Double.compare(s1.price, s2.price); //ascending
        Comparator<Shirt> c = (s1,s2) -> Double.compare(s2.price, s1.price); //descending

        shirts.sort(c);
          Iterator<Shirt> i = shirts.iterator();
        while (i.hasNext()) {
            System.out.println(i.next());
        }

    }
}