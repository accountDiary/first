package com.template.restapi.aggregate.user.store.repository;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserRepository {
    List<UserDto> selectUserInfo();
    //반환할 값이 없으니 void를 쓴다
    void insertUser(UserDto userDto);
    UserDto selectUserEmail(@Param("user_email") String email);
}
