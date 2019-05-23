package com.example.restController;

import com.example.repository.MovieRepository;
import com.example.pojo.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
public class MovieController {
    @Autowired
    private MovieRepository repo;

    @RequestMapping(value="/movies")
    public @ResponseBody Iterable<Movie> getAllMovies(){
       return repo.findAll();
    }

    @RequestMapping(value = "/movie/{id}")
    public Movie getMovie(@PathVariable("id") Long id){
        Optional<Movie> movie= null;
        movie = repo.findById(id);
        return movie.get();
    }

    @RequestMapping(value= "/movie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie){
        return repo.save(movie);
    }


    @RequestMapping(value = "/ping", method = RequestMethod.GET)
    public String getPing() {
        return "OK";
    }

    @RequestMapping(value= "/movie/{id}", method = RequestMethod.PUT)
    public Movie addMovie(@PathVariable("id") Long id,@RequestBody Movie movie){
        Optional<Movie> cr= null;
        cr = repo.findById(id);
        Movie umovie= cr.get();
        umovie.setTitle(movie.getTitle());
        umovie.setDirector(movie.getDirector());
        return repo.save(umovie);
    }

    @RequestMapping(value = "/movie/{id}", method = RequestMethod.DELETE)
    public String deleteMovie(@PathVariable("id") Long id){
        repo.deleteById(id);
        return "Movie deleted";
    }

}
