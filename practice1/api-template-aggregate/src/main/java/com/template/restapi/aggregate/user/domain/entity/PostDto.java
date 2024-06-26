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
    private int post_id;
    private int user_id;
    private String post_writer;
    private String post_date;
    private String post_modify;
    private String title;
    private String sub_title;
    private String content;
    private int view_cnt;
}
