package com.stackroute.repository;

import com.stackroute.models.User;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
   public User findByIdAndPassword(String emailId,String password);

}
