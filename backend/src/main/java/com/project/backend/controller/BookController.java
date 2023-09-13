package com.project.backend.controller;
import com.project.backend.repository.BookRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.project.backend.entity.Book;
import com.project.backend.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @ sind wie hooks
@RestController
@RequestMapping("/api/v1")
public class BookController {

static final String frontendOrigin = "http://localhost:5173/";

    @Autowired
    private BookRepository bookRepository;

    @CrossOrigin(origins = BookController.frontendOrigin) 
    @GetMapping("/books")
    public List < Book > getAllBooks() {
        return bookRepository.findAll();
    }

    @CrossOrigin(origins = BookController.frontendOrigin) 
    @GetMapping("/books/{id}")
    public ResponseEntity < Book > getBookById(@PathVariable(value = "id") Long bookId )
            throws ResourceNotFoundException {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId ));
        return ResponseEntity.ok().body(book);
    }
    @CrossOrigin(origins = BookController.frontendOrigin)
    @PostMapping("/books")
    public Book createBook(@Valid @RequestBody Book book ) {
        return bookRepository.save(book);
    }
    @CrossOrigin(origins = BookController.frontendOrigin)
    @PutMapping("/books/{id}")
    public ResponseEntity < Book > updateBook(@PathVariable(value = "id") Long bookId,
                                              @Valid @RequestBody Book bookDetails) throws ResourceNotFoundException {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));

        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setISBN(bookDetails.getISBN());
        book.setPubYear(bookDetails.getPubYear());
        final Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }
    @CrossOrigin(origins = BookController.frontendOrigin)
    @DeleteMapping("/books/{id}")
    public Map < String, Boolean > deleteBook(@PathVariable(value = "id") Long bookId)
            throws ResourceNotFoundException {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + bookId));

        bookRepository.delete(book);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}