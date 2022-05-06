package ch.fn.personmanagementservice.controller;

import ch.fn.personmanagementservice.domain.Person;
import ch.fn.personmanagementservice.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PersonController {

  private final PersonRepository personRepository;

  @CrossOrigin
  @GetMapping("/all")
  @ResponseStatus(code = HttpStatus.OK)
  public Iterable<Person> getAllPersons() {
    return personRepository.findAll();
  }
}
