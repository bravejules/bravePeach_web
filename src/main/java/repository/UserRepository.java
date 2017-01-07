package repository;

import model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Naver on 2016-12-29.
 */
public interface UserRepository extends JpaRepository<User, Long>{
}
