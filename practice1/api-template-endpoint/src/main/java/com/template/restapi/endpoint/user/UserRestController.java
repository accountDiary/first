package com.template.restapi.endpoint.user;

import com.template.restapi.aggregate.user.domain.entity.PostDto;
import com.template.restapi.aggregate.user.domain.entity.UserDto;
import com.template.restapi.endpoint.user.request.UserQueryRequest;
import com.template.restapi.feature.user.service.PostService;
import com.template.restapi.feature.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

    private final UserService userService;
    private final PostService postService;

    public UserRestController(UserService userService, PostService postService) {
        this.userService = userService;
        this.postService = postService;
    }


    /*
    * Controller Example
    * */
    @PostMapping("/find-user-list/request")
    public ResponseEntity<List<UserDto>> findMissionList(@RequestBody UserQueryRequest request) {
        List<UserDto> userList = userService.findUserList();
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @GetMapping("/find-user-list/request2")
    public ResponseEntity<List<UserDto>> findMissionList2(@RequestBody UserQueryRequest request) {
        List<UserDto> userList = userService.findUserList2();
        System.out.println(userList);
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }
    
    // 확인 완료
    @GetMapping("/test/hello")
    @ResponseBody
    public String hello() {
        return "hello. 안녕하세요.";
    }

    @GetMapping("/test/list")
    public Map<String, Object> list() {
        Map<String, Object> resultMap = new HashMap<>();

        List<UserDto> userList = userService.findUserList();
        PostDto post = postService.selectPost();
        resultMap.put("userList", userList);
        System.out.println("유저리스트: " + userList);
        System.out.println("포스트: " + post);

        return resultMap;
    }

}
