package com.template.restapi.aggregate.user.store.repository;

import com.template.restapi.aggregate.user.domain.entity.PostDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PostRepository {
    PostDto selectPost();
}
