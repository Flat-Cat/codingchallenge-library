package com.project.backend.repository;
import com.project.backend.entity.Book;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

//_JPA besitzt methoden womit es Queries an die DB Schicken kann. BSP SQL-Befehle
// Model für die Tabelle an sich. Entity Model für einen Eintrag(?)
public interface BookRepository extends JpaRepository <Book, Long>{

@Query("SELECT b FROM Book b WHERE b.title LIKE CONCAT('%', :query, '%')")
List<Book> searchBooks(@Param("query") String query);
}
