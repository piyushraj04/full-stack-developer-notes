package com.arya.student_management.controller;

import com.arya.student_management.dto.response.ResponseStructure;
import com.arya.student_management.entity.Student;
import com.arya.student_management.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    //save
    @PostMapping

    public ResponseEntity<ResponseStructure<Student>> saveStudent(@RequestBody Student student) {
        ResponseStructure<Student> response = new ResponseStructure<>();
        response.setStatusCode(HttpStatus.CREATED.value());
        response.setMessage("Student record successfully saved in database...");
        response.setData(studentService.saveStudent(student));
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @GetMapping()
    public List<Student> getStudents() {
        System.out.println("Controller Changed");
        System.out.println("Test");
        return studentService.getStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Integer id) {
        Optional<Student> opt = studentService.getStudentById(id);
        if (opt.isPresent()) {
            return opt.get();
        } else {
            return null;
        }
    }

    //update
    @PutMapping()
    public String updateStudent(@RequestBody Student student){
        if(student.getId()==null){
            return "id must be there to update an existing record...";
        }
        Optional<Student> opt = studentService.getStudentById(student.getId());
        if(opt.isPresent()){
            studentService.updateStudent(student);
            return "Updated Successfully...";
        }else{
            return "Id does not exist in db...";
        }

    }

    //delete
    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable Integer id){
        Optional<Student> opt = studentService.getStudentById(id);
        if(opt.isEmpty()){
            return "404 Not Found😥";
        }else{
            studentService.deleteById(id);
            return "Deleted Successfully...204...";
        }
    }


}
