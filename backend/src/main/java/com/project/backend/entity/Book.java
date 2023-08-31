package com.project.backend.entity;
import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.*;

@Entity
@Table(name = "books")
public class Book {
    private long id;
    private String title;
    private String author;
    private int pub_year;
    private String isbn;

    public Book() {
    }

    public Book(String title, String author, int pub_year, String isbn) {
        this.title = title;
        this.author = author;
        this.pub_year = pub_year;
        this.isbn = isbn;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//____________title_______________________________________________________________________________
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
//____________title_______________________________________________________________________________
    @Column(name = "title", nullable = false)
    public String getTitle() {
        return title;
    }
    public void setTitle(String title ) {
        this.title= title;
    }
//____________author_______________________________________________________________________________
    @Column(name = "author", nullable = false)
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author ) {
        this.author = author;
    }
//____________pub_year_______________________________________________________________________________
    @Column(name = "pub_year", nullable = false)
    public int getPubYear() {
        return pub_year;
    }
    public void setPubYear(int pubYear ) {
        this.pub_year = pubYear;
    }
//____________isbn_______________________________________________________________________________
    @Column(name = "isbn", nullable = false)
    public String getISBN() {
        return isbn;
    }
    public void setISBN(String isbn ) {
        this.isbn = isbn;
    }
}