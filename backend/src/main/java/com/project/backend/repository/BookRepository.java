package com.project.backend.repository;
import com.project.backend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

//_JPA besitzt methoden womit es Queries an die DB Schicken kann. BSP SQL-Befehle
public interface BookRepository extends JpaRepository <Book, Long>{

}