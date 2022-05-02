package ch.fn.personmanagementservice.repository;

import ch.fn.personmanagementservice.domain.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, Long> {}
