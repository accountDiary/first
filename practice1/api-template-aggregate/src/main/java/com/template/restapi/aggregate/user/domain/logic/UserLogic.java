package com.template.restapi.aggregate.user.domain.logic;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import com.template.restapi.aggregate.user.store.UserStore;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import javax.naming.AuthenticationException;
import java.util.List;


@Service
public class UserLogic {
    private final UserStore userStore;
//    private final PasswordEncoder passwordEncoder;
//
//    public UserLogic(UserStore userStore, PasswordEncoder passwordEncoder) {
//        this.userStore = userStore;
//        this.passwordEncoder = passwordEncoder;
//    }

    public UserLogic(UserStore userStore) {
        this.userStore = userStore;
    }

    public List<UserDto> findUserList() {
        return userStore.findUserInfo();
    }

    public UserDto saveUser(UserDto userDto) {
        return userStore.insertUser(userDto);
    }

    public UserDto isEmailExist(String email) {
        return userStore.selectUserEmail(email);
    }

//    public UserDto loginUser(String email, String password) throws AuthenticationException {
//        UserDto user = userStore.selectUserEmailAndPwd(email,password);
//
//        if (user == null || !passwordEncoder.matches(password, user.getUser_pwd())) {
//            // 사용자가 없거나 비밀번호가 일치하지 않으면 예외 발생
//            throw new AuthenticationException("Invalid email or password");
//        }
//
//        // 인증 성공
//        return user;
//    }
}
