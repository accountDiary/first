package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/*
*   comment_id      댓글번호
*   post_id         게시글번호
*   user_id         아이디
*   comment_content 내용
*   comment_writer  작성자
*   comment_date    등록날짜
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("CommentDto")
public class CommentDto {
    private int comment_id;
    private int post_id;
    private int user_id;
    private String comment_content;
    private String comment_writer;
    private String comment_date;
}
