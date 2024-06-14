package com.template.restapi.endpoint.user.request;

import com.template.restapi.aggregate.user.domain.entity.PostDto;
import com.template.restapi.feature.user.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/post")
public class PostRestController {

    private final PostService postService;

    public PostRestController(PostService postService) { this.postService = postService; }

    // 해당되는 포스트 하나 가져오기 (앞으로 할 일: 날짜 넘겨줘야 함)
    @PostMapping("/day")
    @ResponseBody
    public ResponseEntity<Map<String, PostDto>> selectOnePost() {
        PostDto onePost = postService.selectPost();

        // POST 를 사용힐 경우 JSON 데이터를 반환하기 위한 맵(키와 값을 반환)
        Map<String, PostDto> result = new HashMap<>();
        result.put("onePost", onePost);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
