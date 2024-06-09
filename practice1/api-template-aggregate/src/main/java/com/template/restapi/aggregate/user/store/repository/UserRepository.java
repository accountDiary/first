package com.template.restapi.aggregate.user.store.repository;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository
public interface UserRepository {

    List<UserDto> selectUserInfo();
    List<UserDto> selectUserInfo2();
}
