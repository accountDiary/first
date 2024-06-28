package com.template.restapi.aggregate.post.store.repository;

import com.template.restapi.aggregate.post.domain.entity.PostDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface PostRepository {
    PostDto selectPost();
    PostDto insertPost();
}
