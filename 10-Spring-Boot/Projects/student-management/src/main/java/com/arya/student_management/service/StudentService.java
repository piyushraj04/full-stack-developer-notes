package com.arya.student_management.service;

import com.arya.student_management.entity.Student;
import com.arya.student_management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    //to return all students
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(Integer id) {
        return studentRepository.findById(id);

    }

    public Student updateStudent(Student student){
        return studentRepository.save(student);
    }

    public void deleteById(Integer id){
         studentRepository.deleteById(id);
    }

}
