package com.example;
//import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table(name = "books")
//_Entität: bezieht sich auf ein Obj/Datensatz, die eine bestimmte rolle in der Anw. besitzt.
//_Hier bezieht sie sich auf die Informationen je Buch 
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
// Id wird von der Db selbst kreirt
    private int Id;
    private String Title;
    private String Author;
    private int PubYear;
    private String ISBN; 
//_Attribute: Eigenschaften des Obj.

//_Getter/Setter:___________________Id___________________________________________________
public int getId() {
    return Id;
}
public void setId(int Id) {
    this.Id = Id;
}
//__________________________________Title________________________________________________
public String getTitle() {
    return Title;
}
public void setTitle(String Title) {
    this.Title = Title;
}
//__________________________________Author________________________________________________
public String getAuthor() {
    return Author;
}
public void setAuthor(String Author) {
    this.Author = Author;
}
//__________________________________PubYear________________________________________________
public int getPubYear() {
    return PubYear;
}
public void setPubYear(int PubYear) {
    this.PubYear = PubYear;
}
//__________________________________ISBN________________________________________________
public String getISBN() {
    return ISBN;
}
public void setISBN(String ISBN) {
    this.ISBN = ISBN;
}
}