package com.bookstore.repository;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bookstore.entity.Book;

@CrossOrigin("*")
public interface BookRepository extends JpaRepository<Book, Long> {
	
	@RestResource (path = "categoria")
	Page <Book> findByCategoryId(@Param("id")Long id, Pageable pageable);
}
