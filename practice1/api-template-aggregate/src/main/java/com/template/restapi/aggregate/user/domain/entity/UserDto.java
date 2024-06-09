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
    private Integer user_id;
    private String user_email;
    private String user_pwd;
    private String user_name;
    private char user_type;
    private String user_nickname;
    private String user_phone;
    private String user_addr;
    private Date user_regDate;
    private char user_status;

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_pwd() {
        return user_pwd;
    }

    public void setUser_pwd(String user_pwd) {
        this.user_pwd = user_pwd;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public char getUser_type() {
        return user_type;
    }

    public void setUser_type(char user_type) {
        this.user_type = user_type;
    }

    public String getUser_nickname() {
        return user_nickname;
    }

    public void setUser_nickname(String user_nickname) {
        this.user_nickname = user_nickname;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(String user_phone) {
        this.user_phone = user_phone;
    }

    public String getUser_addr() {
        return user_addr;
    }

    public void setUser_addr(String user_addr) {
        this.user_addr = user_addr;
    }

    public Date getUser_regDate() { return user_regDate; }

    public void setUser_regDate(Date user_regDate) {
        this.user_regDate = user_regDate;
    }

    public char getUser_status() {
        return user_status;
    }

    public void setUser_status(char user_status) {
        this.user_status = user_status;
    }
}
