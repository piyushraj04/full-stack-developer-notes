// package 10-Collections.CompareTest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Employee implements Comparable<Employee> {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee{id=" + id + " name=" + name + " salary=" + salary + "}";
    }

    // @Override
    // public int compareTo(Employee e) {
    //     // Employee e = (Employee) o;
    //     if (this.id > e.id) {
    //         return 1;
    //     } else if (this.id < e.id) {
    //         return -1;
    //     }
    //     return 0;
    // }

    // @Override
    // public int compareTo(Employee e){
    //     return e.id - this.id;
    // }

     @Override
    public int compareTo(Employee e){
        return this.id - e.id;
    }

    // @Override
    // public int compareTo(Employee e){
    //     return -1*(this.name.compareTo(e.name));
    // }
}

public class MainEmployee {
    public static void main(String[] args) {
        Employee e1 = new Employee(101, "Piyush", 50000);
        Employee e2 = new Employee(104, "Rahul", 65000);
        Employee e3 = new Employee(102, "Aman", 55000);
        Employee e4 = new Employee(105, "Neha", 70000);
        Employee e5 = new Employee(103, "Priya", 60000);

        List<Employee> employees = new ArrayList<>();

        employees.add(e1);
        employees.add(e2);
        employees.add(e3);
        employees.add(e4);
        employees.add(e5);

        System.out.println(employees);

        Collections.sort(employees);
        for(Employee e:employees){
            System.out.println(e);
        }


    }

}
