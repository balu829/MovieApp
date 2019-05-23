package com.example.repository;

import com.example.pojo.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface MovieRepository extends CrudRepository<Movie, Long> {

}
