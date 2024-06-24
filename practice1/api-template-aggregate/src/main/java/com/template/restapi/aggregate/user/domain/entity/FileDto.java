package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/*
*   file_id         파일 아이디
*   post_id         게시글번호
*   file_board      사진
*   file_regDate    등록날짜
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("FileDto")
public class FileDto {
    private Integer file_id;
    private Integer post_id;
    private String file_board;
    private Date file_regDate;
}
