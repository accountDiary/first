package com.template.restapi.aggregate.post.domain.logic;

import com.template.restapi.aggregate.post.domain.entity.PostDto;
import com.template.restapi.aggregate.post.store.PostStore;
import org.springframework.stereotype.Service;

@Service
public class PostLogic {
    private final PostStore postStore;

    public PostLogic(PostStore postStore) {
        this.postStore = postStore;
    }

    public PostDto showPost() {
        return postStore.selectPost();
    }

    public PostDto savePost() {
        return postStore.insertPost();
    }
}
