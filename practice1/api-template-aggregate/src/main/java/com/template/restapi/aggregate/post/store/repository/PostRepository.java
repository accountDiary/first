package com.template.restapi.aggregate.post.store.repository;

import com.template.restapi.aggregate.post.domain.entity.PostDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface PostRepository {
    PostDto selectPost();

    //게시글삽입
    void insertPost(PostDto postDto);
}
