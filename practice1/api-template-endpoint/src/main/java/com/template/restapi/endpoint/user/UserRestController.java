package com.template.restapi.endpoint.user;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import com.template.restapi.endpoint.user.request.UserQueryRequest;
import com.template.restapi.feature.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserRestController {

    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    /*
    * Controller Example
    * */
    @PostMapping("/find-user-list/request")
    public ResponseEntity<List<UserDto>> findMissionList(@RequestBody UserQueryRequest request) {
        List<UserDto> userList = userService.findUserList();
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @PostMapping("/saveUser")
    public ResponseEntity<UserDto> newUser(@RequestBody Map<String, Object> formData) {
        UserDto savedUser = userService.saveUser(formData);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @PostMapping("/checkEmail")
    public ResponseEntity<String> checkEmail(@RequestBody Map<String, Object> formData) {
        String email = (String) formData.get("email");

        if(userService.isEmailExist(email)) {
            return ResponseEntity.ok("이메일이 이미 존재합니다");
        } else {
            return ResponseEntity.ok("사용 가능한 이메일입니다.");
        }
    }

}
