import java.util.HashSet;
import java.util.Set;

class Emp{
    Integer id;
    String name;
    Double salary;
    public Emp(Integer id,String name,Double salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    @Override
    public boolean equals(Object o){
        Emp e= (Emp)o;
        return this.id==e.id;
    }

    @Override
    public int hashCode(){
        return this.id;
    }

    


}
public class SetTest{
    public static void main(String[] args) {
        Set<Emp> s = new HashSet<>();
        s.add(new Emp(1,"Piyush",500000.0));
        s.add(new Emp(2,"Raj",5000.0));
        s.add(new Emp(3,"Vishal",10000.0));
        s.add(new Emp(4,"Gagan",2000.0));
        s.add(new Emp(5,"Ravi",400.0));

        for(Emp e:s){
            System.out.println(e);
        }

    }

}