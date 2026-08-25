public class Car extends Vehicle {
    String name;
    Car(String name) {
        this.name = name;
    }
    @Override
    public String toString(){
        return name;
    }
    
}
