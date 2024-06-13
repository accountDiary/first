package com.template.restapi.aggregate.user.domain.logic;


import com.template.restapi.aggregate.user.domain.entity.PostDto;
import com.template.restapi.aggregate.user.store.PostStore;
import org.springframework.stereotype.Service;

@Service
public class PostLogic {
    private final PostStore postStore;

    public PostLogic(PostStore postStore) { this.postStore = postStore; }

    public PostDto selectPost() {
        return postStore.selectPost();
    }
}
