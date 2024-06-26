package com.template.restapi.aggregate.post.store;

import com.template.restapi.aggregate.post.domain.entity.PostDto;
import com.template.restapi.aggregate.post.store.repository.PostRepository;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class PostStore {
    private final SqlSessionTemplate sqlSessionTemplate;
    public PostStore(SqlSessionTemplate sqlSessionTemplate) {this.sqlSessionTemplate = sqlSessionTemplate; }

    // 해당하는 유저 아이디와 날짜의 게시글만 골라오기
    public PostDto selectPost() {
        return sqlSessionTemplate
                .getMapper(PostRepository.class)
                .selectPost();
    }

    public PostDto insertPost() {
        return sqlSessionTemplate
                .getMapper(PostRepository.class)
                .insertPost();
    }

}
