package com.template.restapi.aggregate.user.domain.logic;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import com.template.restapi.aggregate.user.store.UserStore;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserLogic {
    private final UserStore userStore;

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
}
