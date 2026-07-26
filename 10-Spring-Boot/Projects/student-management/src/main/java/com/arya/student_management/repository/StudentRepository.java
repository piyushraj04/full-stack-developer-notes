package com.arya.student_management.repository;

import com.arya.student_management.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//We have to use @Repository bcz it's the one who communicated with the db
@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {

}
