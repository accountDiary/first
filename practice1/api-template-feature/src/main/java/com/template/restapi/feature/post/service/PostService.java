package com.template.restapi.feature.post.service;


import com.template.restapi.aggregate.post.domain.entity.PostDto;
import com.template.restapi.aggregate.post.domain.logic.PostLogic;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class PostService {
    private final PostLogic postLogic;

    public PostDto showPost() {
        return postLogic.showPost();
    }

    public PostDto savePost() { return postLogic.savePost(); }
}
