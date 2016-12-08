package mapper;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

/**
 * Created by Naver on 2016-12-04.
 */

public interface UserInterface {

    @Select("select 1")
    String selectTest();
}
