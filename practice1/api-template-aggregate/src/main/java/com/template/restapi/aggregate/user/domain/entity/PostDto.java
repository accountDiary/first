package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/*
*   post_id     게시글번호
*   user_id     아이디
*   post_writer 작성자
*   post_date   등록날짜
*   post_modify 수정날짜
*   title       게시글제목
*   sub_title   부제목
*   content     게시글내용
*   view_cnt    조회수
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("PostDto")
public class PostDto {
    private Integer post_id;
    private Integer user_id;
    private String post_writer;
    private Date post_date;
    private Date post_modify;
    private String title;
    private String sub_title;
    private String content;
    private int view_cnt;

    public Integer getPost_id() {
        return post_id;
    }

    public void setPost_id(Integer post_id) {
        this.post_id = post_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getPost_writer() {
        return post_writer;
    }

    public void setPost_writer(String post_writer) {
        this.post_writer = post_writer;
    }

    public Date getPost_date() {
        return post_date;
    }

    public void setPost_date(Date post_date) {
        this.post_date = post_date;
    }

    public Date getPost_modify() {
        return post_modify;
    }

    public void setPost_modify(Date post_modify) {
        this.post_modify = post_modify;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSub_title() {
        return sub_title;
    }

    public void setSub_title(String sub_title) {
        this.sub_title = sub_title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getView_cnt() {
        return view_cnt;
    }

    public void setView_cnt(int view_cnt) {
        this.view_cnt = view_cnt;
    }
}
