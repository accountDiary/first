package com.template.restapi.feature.user.service;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import com.template.restapi.aggregate.user.domain.logic.UserLogic;
import com.template.restapi.aggregate.user.store.repository.UserRepository;
import com.template.restapi.feature.user.actions.UtilAction;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;


@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserLogic userLogic;
    private final UserRepository userRepository;
    private final UtilAction utilAction;

    // User가 오늘 할 수 있는 미션 리스트 조회
    public List<UserDto> findUserList() {
        return userLogic.findUserList();
    }

    public UserDto saveUser(Map<String, Object> formData) {

        UserDto userDto = new UserDto();

        userDto.setUser_email((String) formData.get("email"));
        userDto.setUser_pwd((String) formData.get("password"));
        userDto.setUser_name((String) formData.get("name"));
        userDto.setUser_nickname((String) formData.get("nickname"));
        userDto.setUser_phone((String) formData.get("tel"));
        userDto.setUser_addr((String) formData.get("address"));

        return userLogic.saveUser(userDto);

    }

    public boolean isEmailExist(String email) {
        UserDto userDto= userLogic.isEmailExist(email);
        return userDto != null;
    }



}
