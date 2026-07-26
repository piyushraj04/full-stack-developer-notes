package com.arya.student_management.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student_details")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    private Integer age;

    public Student() {

    }

    public Student(String name, String email, Integer age) {
        //we don't set for id bcz it's auto generate
        this.name = name;
        this.email = email;
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    //we don't create setter for id bcz it's auto generate

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getAge() {
        return age;
    }


}
