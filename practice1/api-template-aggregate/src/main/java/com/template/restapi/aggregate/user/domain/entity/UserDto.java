package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/*
*   user_id         아이디
*   user_email      이메일
*   user_pwd        비밀번호
*   user_name       이름
*   user_type       타입
*   user_nickname   닉네임
*   user_phone      전화번호
*   user_addr       주소
*   user_regDate    가입일
*   user_status     상태
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("UserDto")
public class UserDto {
    private int user_id;
    private String user_email;
    private String user_pwd;
    private String user_name;
    private char user_type;
    private String user_nickname;
    private String user_phone;
    private String user_addr;
    private Date user_regDate; /// string으로 바꾸기
    private char user_status;
}


