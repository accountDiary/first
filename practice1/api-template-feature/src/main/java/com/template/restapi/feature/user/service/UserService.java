package com.template.restapi.feature.user.service;

import com.template.restapi.aggregate.user.domain.entity.UserDto;
import com.template.restapi.aggregate.user.domain.logic.UserLogic;
import com.template.restapi.feature.user.actions.UtilAction;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserLogic userLogic;
    private final UtilAction utilAction;

    // User가 오늘 할 수 있는 미션 리스트 조회
    public List<UserDto> findUserList() {
        return userLogic.findUserList();
    }

    public List<UserDto> findUserList2() {
        return userLogic.findUserList2();
    }

}
